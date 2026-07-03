 import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  // Yahan 4 arguments define kiye hain taaki HTML ka error khatam ho sake
  sendEmail(e: Event, nameVal: string, emailVal: string, messageVal: string) {
    e.preventDefault();
    
    // Khali spaces check karne ki validation
    if (!nameVal.trim() || !emailVal.trim() || !messageVal.trim()) {
      alert('Please fill out all required fields (Name, Email, and Message) before submitting!');
      return;
    }

    console.log("Validation clear! Sending via EmailJS...");

    const serviceID = 'service_opdzc1n';   
    const templateID = 'template_y46ovh9'; 
    const publicKey = '5uUiBh3W-uWtelQ7u';   

    emailjs.sendForm(serviceID, templateID, e.target as HTMLFormElement, publicKey)
      .then(() => {
        alert('Message Sent Successfully!');
        (e.target as HTMLFormElement).reset(); 
      }, (error: any) => {
        alert('Failed to send message, please try again.');
        console.log("EmailJS Error:", error);
      });
  }
}