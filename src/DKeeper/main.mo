import List "mo:base/List";
import Debug "mo:base/Debug";

actor DKeeper{
  
  public type Note={
    title:Text;
    content:Text;
  };

  var notes: List.List<Note> = List.nil<Note>();

  public func createNote(titleText:Text,contentText:Text){
    let newNote:Note={
      title=titleText;
      content=contentText;
    };
    notes:=List.push(newNote,notes);
  };

  public func readNotes():async [Note]{
    return List.toArray(notes);
  };

  public func DeleteNote(titleText:Text){
    notes:=List.filter(notes, func (note : Note) : Bool { note.title != titleText });
  }

}