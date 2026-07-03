import { Component } from '@angular/core';
import emailjs from '@emailjs/browser'; // <-- Ab yeh line bina kisi error ke chalegi

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  sendEmail(e: Event) {
    e.preventDefault();
    console.log("Form submit trigger ho gaya!");

    // Apni asli keys yahan dalein
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