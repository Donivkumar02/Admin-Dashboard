import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  imageUrl:any="../../assets/images/nati.jpg";
  constructor() { }

  ngOnInit() {
  }

  
  showImage(files){
      
    var reader = new FileReader();
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imageUrl = reader.result;
  }
}

}
