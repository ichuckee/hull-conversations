Hull.widget("subjects",{templates:["list"],subjects:[{name:"facebook",color:"#3B5998"},{name:"twitter",color:"#00A0D1"},{name:"pinterest",color:"#C8232C"},{name:"Prism",color:"#CC181E"}],beforeRender:function(e){return e.subjects=this.subjects,e},actions:{select:function(e,t){if(t.data.uid)var n=this.sandbox.util.entity.encode(t.data.uid);else var n="";this.$el.find(".conversations-subject").html(t.data.uid||"All Topics"),this.sandbox.emit("hull.conversation.reload",n),this.sandbox.emit("hull.conversation.reset_form",n)}}});