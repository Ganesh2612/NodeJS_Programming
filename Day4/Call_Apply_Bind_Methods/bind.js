function create(){
    console.log(this.file+" has been created.");
}
let f={file:"Index.html"};
const answer=create.bind(f);
answer();