package com.example.training.controller;

import java.io.Serializable;

import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import com.example.training.input.ReservationInput;

@Component
@SessionScope
@SuppressWarnings("serial")
public class ReservationSession implements Serializable {
    private ReservationInput reservationInput;

    public ReservationInput getReservationInput() {
        return reservationInput;
    }

    public void setReservationInput(ReservationInput reservationInput) {
        this.reservationInput = reservationInput;
    }

    public void clearData() {
        this.reservationInput = null;
    }

    //ゲッターメソッド・セッターメソッド・クリアメソッド;
    
}
