import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  public people: any[] = [
    {
      id:1,
      firstName: "Giorgi",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s",
      attendance: 100,
      stipendia: true
    },
    {
      id:2,
      firstName: "Mariam",
      image: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid",
      attendance: 65,
      stipendia: false
    },
    {
      id:3,
      firstName: "Dachi",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s",
      attendance: 100,
      stipendia: false
    },
    {
      id:4,
      firstName: "Sofo",
      image: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid",
      attendance: 95,
      stipendia: true
    },
  ]
}
