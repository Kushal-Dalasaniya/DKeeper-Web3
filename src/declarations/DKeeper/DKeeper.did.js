export const idlFactory = ({ IDL }) => {
  const Note = IDL.Record({ 'title' : IDL.Text, 'content' : IDL.Text });
  return IDL.Service({
    'DeleteNote' : IDL.Func([IDL.Text], [], ['oneway']),
    'createNote' : IDL.Func([IDL.Text, IDL.Text], [], ['oneway']),
    'readNotes' : IDL.Func([], [IDL.Vec(Note)], []),
  });
};
export const init = ({ IDL }) => { return []; };
