var require = meteorInstall({"client":{"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// client/template.main.js                                                                         //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
                                                                                                   // 1
Template.body.addContent((function() {                                                             // 2
  var view = this;                                                                                 // 3
  return [ HTML.Raw("<h1>Helloworld</h1>\n  "), Spacebars.include(view.lookupTemplate("todos")) ];
}));                                                                                               // 5
Meteor.startup(Template.body.renderToDocument);                                                    // 6
                                                                                                   // 7
Template.__checkName("todos");                                                                     // 8
Template["todos"] = new Template("Template.todos", (function() {                                   // 9
  var view = this;                                                                                 // 10
  return [ HTML.Raw('<h1>Add something</h1>\n\t<form>\n\t\t<input type="text" name="name" placeholder="Add things here">\n\t\t<input type="submit" value="submit">\n\t</form>\n\n\t'), HTML.UL("\n\t\t", Blaze.Each(function() {
    return Spacebars.call(view.lookup("taskCollection"));                                          // 12
  }, function() {                                                                                  // 13
    return [ "\n\t\t\t", HTML.LI(Blaze.View("lookup:name", function() {                            // 14
      return Spacebars.mustache(view.lookup("name"));                                              // 15
    })), "\n\t\t" ];                                                                               // 16
  }), "\n\t") ];                                                                                   // 17
}));                                                                                               // 18
                                                                                                   // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// client/main.js                                                                                  //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
Tasks = new Mongo.Collection('tasks');                                                             // 1
                                                                                                   //
if (Meteor.isClient) {}                                                                            // 3
                                                                                                   //
if (Meteor.isServer) {}                                                                            // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.main.js");
require("./client/main.js");