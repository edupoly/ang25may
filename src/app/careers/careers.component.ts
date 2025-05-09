import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Define an interface for a job posting
interface JobPosting {
  id: number;
  title: string;
  location: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

@Component({
  selector: 'app-careers', // The custom HTML tag to use this component
  imports:[NgFor,NgIf],
  templateUrl: './careers.component.html', // Link to the component's HTML template
  styleUrls: ['./careers.component.css'] // Link to the component's CSS file
})
export class CareersComponent implements OnInit {

  // Array to hold job postings
  jobPostings: JobPosting[] = [];

  constructor() { }

  // This method is called when the component is initialized
  ngOnInit(): void {
    // In a real application, you would fetch this data from an API.
    // Here, we'll use some dummy data.
    this.loadJobPostings();
  }

  // Method to load job postings (dummy data)
  loadJobPostings(): void {
    this.jobPostings = [
      {
        id: 1,
        title: 'Frontend Developer',
        location: 'Remote',
        description: 'We are looking for a skilled Frontend Developer to join our team. You will be responsible for developing and implementing user interfaces using modern web technologies.',
        requirements: [
          'Proficiency in HTML, CSS, and JavaScript',
          'Experience with a modern JavaScript framework (e.g., Angular, React, Vue)',
          'Understanding of responsive design principles',
          'Experience with version control (Git)'
        ],
        responsibilities: [
          'Develop user-facing features',
          'Build reusable components and front-end libraries',
          'Collaborate with backend developers and UI/UX designers',
          'Ensure the technical feasibility of UI/UX designs'
        ]
      },
      {
        id: 2,
        title: 'Backend Engineer',
        location: 'New York, NY',
        description: 'Join our backend team to build and maintain scalable server-side applications. You will work with databases, APIs, and cloud services.',
        requirements: [
          'Strong proficiency in a backend language (e.g., Node.js, Python, Java)',
          'Experience with database systems (e.g., SQL, NoSQL)',
          'Understanding of RESTful API design',
          'Experience with cloud platforms (e.g., AWS, Azure, GCP)'
        ],
        responsibilities: [
          'Design and implement server-side logic',
          'Develop and maintain APIs',
          'Work with databases to store and retrieve data',
          'Ensure the performance and scalability of applications'
        ]
      },
      {
        id: 3,
        title: 'Data Scientist',
        location: 'San Francisco, CA',
        description: 'We are seeking a Data Scientist to analyze complex datasets and build predictive models. You will work closely with product and engineering teams.',
        requirements: [
          'Strong statistical knowledge',
          'Proficiency in Python or R',
          'Experience with machine learning libraries (e.g., scikit-learn, TensorFlow, PyTorch)',
          'Experience with data visualization tools'
        ],
        responsibilities: [
          'Analyze large datasets to identify trends and insights',
          'Build and evaluate machine learning models',
          'Communicate findings to technical and non-technical stakeholders',
          'Develop data-driven solutions to business problems'
        ]
      }
    ];
  }
}
