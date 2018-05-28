import { Piece } from "./models/piece";
export interface PieceComponent {
  piece:Piece;
}
  // ngOnInit() {
  //   let pieceType = this.piece.type;
  //   switch(pieceType){
  //     case "image": {
  //        var imageComponentFactory=this.componentFactoryResolver.resolveComponentFactory(PiecePictureComponent);
  //        let imageComponent =this.pieceViewContainerRef.createComponent(imageComponentFactory);
  //        (<PiecePictureComponent>imageComponent.instance).piece = this.piece;
  //     }
  //     case "text":{
  //        var textComponentFactory=this.componentFactoryResolver.resolveComponentFactory(PieceTextComponent);
  //        let textComponent =this.pieceViewContainerRef.createComponent(textComponentFactory);
  //        (<PieceTextComponent>textComponent.instance).piece = this.piece;
  //     }
  //     case "heading":{
  //       var headingComponentFactory = this.componentFactoryResolver.resolveComponentFactory(PieceHeadingComponent);
  //       let headingComponent = this.pieceViewContainerRef.createComponent(headingComponentFactory);
  //       (<PieceHeadingComponent>headingComponent.instance).piece = this.piece;
  //     }
  //     case "link":{
  //       var linkComponentFactory = this.componentFactoryResolver.resolveComponentFactory(PieceLinkComponent);
  //       let linkComponent = this.pieceViewContainerRef.createComponent(linkComponentFactory);
  //       (<PieceLinkComponent>linkComponent.instance).piece = this.piece;
  //     }

  //   }
    

    
    //depending on the type load the right component, and html pieces.
    //render the piece and the css associated with piece stored in the css object of the piece

