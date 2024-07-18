const key = process.env.KEY 
if(!key) {
    console.log(`NoKey`)
    process.exit(1)
}
//aOeoYJUn91IfMdFiEZZIhiWfHBPEuimBlhwdFC1xwDFm5zysYcOdiRLt
fetch("https://api.pexels.com/v1/curated?per_page=80", 
    {
        headers: {
            "Authorization": key
        }
    }
).then(r=>r.json()).then(j => {
    j.photos.slice(process.env.START_INDEX || 0).forEach(i => {
console.log(`Downloading photo ${i.id}`)
try {
require('child_process').execSync('curl --output '+ `${i.id}.jpeg` + ' '+ i.src.original, { cwd: require('path').join(__dirname, '..', 'public', 'images')})
} catch (e) {}
})
})