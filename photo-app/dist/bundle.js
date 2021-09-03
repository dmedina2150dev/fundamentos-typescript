(()=>{"use strict";var t={987:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Album=void 0;const r=i(123);class s extends r.Item{constructor(t,e){super(t,e),this.pictures=[]}addPicture(t){this.pictures.push(t)}}e.Album=s},123:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Item=void 0,e.Item=class{constructor(t,e){this._id=t,this._title=e}get id(){return this._id}get title(){return this._title}set title(t){this._title=t}}},945:(t,e)=>{var i;Object.defineProperty(e,"__esModule",{value:!0}),e.PhotoOrientation=void 0,(i=e.PhotoOrientation||(e.PhotoOrientation={}))[i.Landscape=0]="Landscape",i[i.Portrait=1]="Portrait",i[i.Square=2]="Square",i[i.Panorama=3]="Panorama"},449:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Picture=void 0;const r=i(123);class s extends r.Item{constructor(t,e,i,r){super(t,e),this._date=i,this._orientation=r}toString(){return`[id: ${this.id},\n                title: ${this.title},\n                orientation: ${this._orientation}]`}}e.Picture=s},536:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.User=void 0,e.User=class{constructor(t,e,i,r){this.id=t,this.username=e,this.firstName=i,this.isPro=r,this.album=[]}addAlbum(t){this.album.push(t)}removeAlbum(t){const e=this.album.findIndex((e=>e.id===t.id));let i;return e>=0&&(i=this.album[e],this.album.splice(e,1)),i}}}},e={};function i(r){var s=e[r];if(void 0!==s)return s.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,i),o.exports}(()=>{const t=i(987),e=i(945),r=i(449),s=new(i(536).User)(10,"dmedina","Dajan",!0),o=new t.Album(1,"Album Personal"),n=new r.Picture(1,"boda","20-11-2021",e.PhotoOrientation.Square);s.addAlbum(o),o.addPicture(n),console.log("user",s),s.removeAlbum(o),console.log("user sin album:",s)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0QsRUFBS2pCLFNBQVNELEdBQ2RBLEVBQU1kLFdBQVdDLEdBQ2pCaUMsUUFBUUMsSUFBSSxPQUFRSCxHQUNwQkEsRUFBS2hCLFlBQVlGLEdBQ2pCb0IsUUFBUUMsSUFBSSxrQkFBbUJILEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG90by1hcHAvLi9zcmMvYWxidW0udHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL2l0ZW0udHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL3Bob3RvLW9yaWVudGF0aW9uLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy9waWN0dXJlLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy91c2VyLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waG90by1hcHAvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFsYnVtID0gdm9pZCAwO1xyXG5jb25zdCBpdGVtXzEgPSByZXF1aXJlKFwiLi9pdGVtXCIpO1xyXG5jbGFzcyBBbGJ1bSBleHRlbmRzIGl0ZW1fMS5JdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCB0aXRsZSk7XHJcbiAgICAgICAgdGhpcy5waWN0dXJlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgYWRkUGljdHVyZShwaWN0dXJlKSB7XHJcbiAgICAgICAgdGhpcy5waWN0dXJlcy5wdXNoKHBpY3R1cmUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWxidW0gPSBBbGJ1bTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5JdGVtID0gdm9pZCAwO1xyXG5jbGFzcyBJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSkge1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcbiAgICBnZXQgdGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xyXG4gICAgfVxyXG4gICAgc2V0IHRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkl0ZW0gPSBJdGVtO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlBob3RvT3JpZW50YXRpb24gPSB2b2lkIDA7XHJcbnZhciBQaG90b09yaWVudGF0aW9uO1xyXG4oZnVuY3Rpb24gKFBob3RvT3JpZW50YXRpb24pIHtcclxuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIkxhbmRzY2FwZVwiXSA9IDBdID0gXCJMYW5kc2NhcGVcIjtcclxuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIlBvcnRyYWl0XCJdID0gMV0gPSBcIlBvcnRyYWl0XCI7XHJcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJTcXVhcmVcIl0gPSAyXSA9IFwiU3F1YXJlXCI7XHJcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJQYW5vcmFtYVwiXSA9IDNdID0gXCJQYW5vcmFtYVwiOyAvLyAzXHJcbn0pKFBob3RvT3JpZW50YXRpb24gPSBleHBvcnRzLlBob3RvT3JpZW50YXRpb24gfHwgKGV4cG9ydHMuUGhvdG9PcmllbnRhdGlvbiA9IHt9KSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUGljdHVyZSA9IHZvaWQgMDtcclxuY29uc3QgaXRlbV8xID0gcmVxdWlyZShcIi4vaXRlbVwiKTtcclxuY2xhc3MgUGljdHVyZSBleHRlbmRzIGl0ZW1fMS5JdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgX2RhdGUsIF9vcmllbnRhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGlkLCB0aXRsZSk7XHJcbiAgICAgICAgdGhpcy5fZGF0ZSA9IF9kYXRlO1xyXG4gICAgICAgIHRoaXMuX29yaWVudGF0aW9uID0gX29yaWVudGF0aW9uO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBbaWQ6ICR7dGhpcy5pZH0sXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJHt0aGlzLnRpdGxlfSxcclxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiAke3RoaXMuX29yaWVudGF0aW9ufV1gO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGljdHVyZSA9IFBpY3R1cmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVXNlciA9IHZvaWQgMDtcclxuY2xhc3MgVXNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdXNlcm5hbWUsIGZpcnN0TmFtZSwgaXNQcm8pIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xyXG4gICAgICAgIHRoaXMuaXNQcm8gPSBpc1BybztcclxuICAgICAgICB0aGlzLmFsYnVtID0gW107XHJcbiAgICB9XHJcbiAgICBhZGRBbGJ1bShhbGJ1bSkge1xyXG4gICAgICAgIHRoaXMuYWxidW0ucHVzaChhbGJ1bSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVBbGJ1bShhbGJ1bSkge1xyXG4gICAgICAgIC8vIEJ1c2NhciBlbCBBbGJ1bVxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGJ1bS5maW5kSW5kZXgoYSA9PiBhLmlkID09PSBhbGJ1bS5pZCk7XHJcbiAgICAgICAgLy8gZ3VhcmRhciBlbCBvYmpldG8gYWxidW1cclxuICAgICAgICBsZXQgZGVsZXRlQWxidW07XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgZGVsZXRlQWxidW0gPSB0aGlzLmFsYnVtW2luZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5hbGJ1bS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGVsZXRlQWxidW07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Vc2VyID0gVXNlcjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFsYnVtXzEgPSByZXF1aXJlKFwiLi9hbGJ1bVwiKTtcclxuY29uc3QgcGhvdG9fb3JpZW50YXRpb25fMSA9IHJlcXVpcmUoXCIuL3Bob3RvLW9yaWVudGF0aW9uXCIpO1xyXG5jb25zdCBwaWN0dXJlXzEgPSByZXF1aXJlKFwiLi9waWN0dXJlXCIpO1xyXG5jb25zdCB1c2VyXzEgPSByZXF1aXJlKFwiLi91c2VyXCIpO1xyXG5jb25zdCB1c2VyID0gbmV3IHVzZXJfMS5Vc2VyKDEwLCAnZG1lZGluYScsICdEYWphbicsIHRydWUpO1xyXG5jb25zdCBhbGJ1bSA9IG5ldyBhbGJ1bV8xLkFsYnVtKDEsICdBbGJ1bSBQZXJzb25hbCcpO1xyXG5jb25zdCBwaWN0dXJlID0gbmV3IHBpY3R1cmVfMS5QaWN0dXJlKDEsICdib2RhJywgJzIwLTExLTIwMjEnLCBwaG90b19vcmllbnRhdGlvbl8xLlBob3RvT3JpZW50YXRpb24uU3F1YXJlKTtcclxuLy8gQ3JlYW1vcyByZWxhY2lvbmVzXHJcbnVzZXIuYWRkQWxidW0oYWxidW0pO1xyXG5hbGJ1bS5hZGRQaWN0dXJlKHBpY3R1cmUpO1xyXG5jb25zb2xlLmxvZygndXNlcicsIHVzZXIpO1xyXG51c2VyLnJlbW92ZUFsYnVtKGFsYnVtKTtcclxuY29uc29sZS5sb2coJ3VzZXIgc2luIGFsYnVtOicsIHVzZXIpO1xyXG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJBbGJ1bSIsIml0ZW1fMSIsIkl0ZW0iLCJjb25zdHJ1Y3RvciIsImlkIiwidGl0bGUiLCJzdXBlciIsInRoaXMiLCJwaWN0dXJlcyIsImFkZFBpY3R1cmUiLCJwaWN0dXJlIiwicHVzaCIsIl9pZCIsIl90aXRsZSIsIlBob3RvT3JpZW50YXRpb24iLCJQaWN0dXJlIiwiX2RhdGUiLCJfb3JpZW50YXRpb24iLCJ0b1N0cmluZyIsIlVzZXIiLCJ1c2VybmFtZSIsImZpcnN0TmFtZSIsImlzUHJvIiwiYWxidW0iLCJhZGRBbGJ1bSIsInJlbW92ZUFsYnVtIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJhIiwiZGVsZXRlQWxidW0iLCJzcGxpY2UiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiYWxidW1fMSIsInBob3RvX29yaWVudGF0aW9uXzEiLCJwaWN0dXJlXzEiLCJ1c2VyIiwiU3F1YXJlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=