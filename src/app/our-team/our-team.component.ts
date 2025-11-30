import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent {

  teamMembers = [
    {
      name: 'Perfect propertys and goups ',
      role: 'Founder & CEO',
      photo: 'assets/logo/propertis.png',
      achievements: '10+ years in industry, multiple awards in innovation.'
    },
    {
      name: 'Perfect Saloon',
      role: 'Head of Salon Services',
      photo: 'assets/logo/nest.png',
      achievements: 'Certified stylist with 15+ years of experience.'
    },
    {
      name: 'Perfect Autohub',
      role: 'Autohub Lead Mechanic',
      photo: 'assets/logo/auto hub.png',
      achievements: 'Expert in car and bike repair, won “Best Garage” award 2023.'
    },
    {
      name: 'Perfct A to Z services',
      role: 'Autohub Lead Mechanic',
      photo: 'assets/logo/enterprises.png',
      achievements: 'Expert in car and bike repair, won “Best Garage” award 2023.'
    },
    {
      name: 'perfect udyog samuha',
      role: 'Autohub Lead Mechanic',
      photo: 'assets/logo/propertis.png',
      achievements: 'Expert in car and bike repair, won “Best Garage” award 2023.'
    },
    {
      name: 'Godai pathsanstha',
      role: 'Autohub Lead Mechanic',
      photo: 'assets/logo/godai.png',
      achievements: 'Expert in car and bike repair, won “Best Garage” award 2023.'
    },
    {
      name: 'Perfect construction',
      role: 'Autohub Lead Mechanic',
      photo: 'assets/logo/Devlopers.png',
      achievements: 'Expert in car and bike repair, won “Best Garage” award 2023.'
    }
    
    // Add more team members as needed
  ];

}
