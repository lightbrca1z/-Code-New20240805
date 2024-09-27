import { render, screen } from "@testing-library/react"
import Greet from "./Greet"
test('h1が存在するかどうか', () => {
    const{debug} = render(<Greet />);
    const h1El = screen.getByText("こんにちは");
    expect(h1El).toBeInTheDocument();

    //roleで要素が複数ある時は、一番最初のものを取ってくる。
    // const radioEl = screen.getByRole('radio');
    // debug(radioEl);
    // expect(radioEl).toBeInTheDocument;

    // const imgEl = screen.getByAltText('React Logo');
    // debug(imgEl);

    // const headingEl = screen.getByRole('heading');
    // debug(headingEl);

    // const elByLabel = screen.getByLabelText('氏名');
    // debug(elByLabel);

    const elByPlaceholder = screen.getByPlaceholderText('Code Mafia')
    debug(elByPlaceholder);

})