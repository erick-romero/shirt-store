import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  canvas : any;
  shirtColor = '#fff'

  constructor() { }


  ngOnInit(): void {
    this.canvas = new fabric.Canvas('tshirt-canvas');
    let canvas = this.canvas
    
        

    document.addEventListener("keydown", function(e) {
      var keyCode = e.keyCode;
  
      if(keyCode == 46){
          console.log("Removing selected element on Fabric.js on DELETE key !");
          canvas.remove(canvas.getActiveObject());
      }
  }, false);

  }

 Addtext() { 
    this.canvas.add(new fabric.IText('Tap and Type', { 
          left: 0,
          top:   0,
          fontFamily: 'arial black',
          fill: '#333',
          fontSize: 20,
       
    }));
    }
  changeShirtColor(color:any){
    this.shirtColor = color.value
  }


  
  async addImg( event:any){
    var file = event.files[0];
    var reader = new FileReader();
    var canvas = this.canvas
    

    reader.onload = async function (e){
      var imgObj = new Image();
      //let op = e!.target!.result!
      imgObj.src = e.target?.result?.toString() || ''
        var img = new fabric.Image(imgObj);
        fabric.Image.fromURL(imgObj.src, function(img) {
          img.set({top: 0, left: 0, angle: 0, opacity: 1, selectable: true});
           img.scaleToHeight(300);
            img.scaleToWidth(300); 
          canvas.add(img);
      });
        
       // img.scaleToHeight(300);
       // img.scaleToWidth(300); 
      
    }

    if(event.files[0]){
      reader.readAsDataURL(event.files[0]);
  }

  }

  cotizarDisenio(){
    alert('Se le enviara por correo la cotización de su diseño')
  }

  textColor(event:any){
    let color = event.target.value
    this.canvas.getActiveObject().set('fill',color);
    this.canvas.renderAll();
  }

  textFont(event:any){
    console.log('here')
    this.canvas.getActiveObject().set('fontFamily',event.target.value);
    this.canvas.renderAll();
  }

}
