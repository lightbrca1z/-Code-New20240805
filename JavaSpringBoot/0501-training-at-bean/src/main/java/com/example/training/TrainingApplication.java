package com.example.training;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.training.entity.Training;
import com.example.training.repository.JdbcTrainingRepository;
import com.example.training.repository.TrainingRepository;
import com.example.training.service.TrainingService;
import com.example.training.service.TrainingServiceImpl;

@Configuration
public class TrainingApplication {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(TrainingApplication.class);
        TrainingService trainingService = context.getBean(TrainingService.class);

        List<Training> trainings = trainingService.findAll();
        for (Training training : trainings) {
            System.out.println(training.getTitle());
        }
    }

    @Bean
    public TrainingRepository trainingRepository() {
    	return new JdbcTrainingRepository();
    }
    
    @Bean
    public TrainingService trainingService(TrainingRepository trainingRepository) {
    	return new TrainingServiceImpl(trainingRepository);
    }
}

