import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import io.github.cdimascio.dotenv.Dotenv;

public class Mail {
    public static void main(String[] args) {
        // 環境変数から取得（推奨）
    	Dotenv dotenv = Dotenv.configure()
    		    .directory("/Applications/Eclipse_2023-12.app/Contents/workspace/UdemyJavaLicence/Mail1") // `.env`のあるフォルダ
    		    .load();

        String username = dotenv.get("MAIL_USERNAME"); // 送信元メールアドレス
        String password = dotenv.get("MAIL_PASSWORD"); // Googleアプリパスワードを環境変数から取得

        System.out.println(username);
        System.out.println(password);
        
        
        if (username == null || password == null) {
            System.err.println("エラー: メールアドレスまたはパスワードが環境変数に設定されていません。");
            return;
        }

        // SMTPサーバー設定
        Properties properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", "587");

        // 認証情報の設定
        Session session = Session.getInstance(properties, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            // メールの送信準備
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipient(Message.RecipientType.TO, new InternetAddress(args.length > 0 ? args[0] : username));
            message.setSubject("Hello World テストメール");
            message.setText("Hello World");

            // 送信
            Transport.send(message);
            System.out.println("メールが送信されました。");

        } catch (MessagingException e) {
            System.err.println("メールの送信に失敗しました: " + e.getMessage());
            e.printStackTrace();
        }
    }
}