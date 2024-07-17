let username=localStorage.getItem('username')
let usernamesection=document.getElementById('username')
usernamesection.innerHTML=`<h1>${username}</h1>`

let logout=document.getElementById('logout')
logout.addEventListener('click', ()=>{
    location.href='../SignUp-Login Page/login.html'
})

//adding data

let albumdiv=document.getElementById('albumdiv')
let mainalbumdiv=document.getElementById('mainalbumdiv')
let mainsongsdiv=document.getElementById('mainsongsdiv')
let songsdiv=document.getElementById('songsdiv')
fetch('./data.json')
.then(res=>res.json())
.then(data=>displayalbums(data))

let displayalbums=(data)=>{
    //console.log(data)
    data.forEach(element=>{
        let div=document.createElement('div')
        div.innerHTML=`<img src=${element.albumimage}>
        <p>${element.albumname}</p>`
        albumdiv.appendChild(div);

        div.addEventListener('click',()=>{
            mainalbumdiv.style.display='none'
            mainsongsdiv.style.display='flex'
            element.songs.forEach(ele=>{
                songsdiv.innerHTML+=`<div>
                <p>${ele.songname}</p>
                <h4>${ele.artist}</h4>
                <i class="fa-light fa-heart"></i>
                <i class="fa-duotone fa-circle-play" style="--fa-primary-color: #000000; --fa-secondary-color: #00ff1e; --fa-secondary-opacity: 1;"></i>
                </div>`

                let playbtns=document.getElementsByClassName('fa-circle-play')
                let playblock=document.getElementById('play-block')
                for(let i=0;i<playbtns.length;i++){
                    playbtns[i].addEventListener('click', ()=>{
                        let song=element.songs.find(ele=>ele.songname==playbtns[i].parentElement.children[0].innerText)
                        console.log(song);
                        playblock.style.display='flex';
                        songsdiv.style.height='65%';
                        playblock.innerHTML=`<p>${song.songname}</p>
                        <p>${song.artist}</p>
                        <audio src=${song.song} autoplay controls></audio>`
                    })
                }

                let likebtns=document.getElementsByClassName('fa-heart');
                let likedblk=document.getElementById('liked-block');
                for(let i=0;i<likebtns.length;i++){
                    likebtns[i].addEventListener('click',()=>{
                        let song=element.songs.find(ele=>ele.songname==likebtns[i].parentElement.children[0].innerText)
                        likedblk.innerHTML+=`<div>
                        <p>${song.songname}</p>
                        <i class="fa-duotone fa-circle-play" style="--fa-primary-color: #000000; --fa-secondary-color: #00ff1e; --fa-secondary-opacity: 1;"></i>
                        <button class='removebtn'>Remove</button>
                        </div>`

                        let playbtns1=document.getElementsByClassName('fa-circle-play')
                        let playblock1=document.getElementById('play-block')
                        for(let i=0;i<playbtns1.length;i++){
                            playbtns1[i].addEventListener('click', ()=>{
                                let song=element.songs.find(ele=>ele.songname==playbtns[i].parentElement.children[0].innerText)
                                console.log(song);
                                playblock1.style.display='flex';
                                songsdiv.style.height='65%';
                                playblock1.innerHTML=`<p>${song.songname}</p>
                                <p>${song.artist}</p>
                                <audio src=${song.song} autoplay controls></audio>`
                            })
                        }

                        let removebtns=document.getElementsByClassName('removebtn')
                        for(let i=0;i<removebtns.length;i++){
                            removebtns[i].addEventListener('click',()=>{
                                removebtns[i].parentElement.style.display='none'
                            })
                        }
                    })
                }

            })
        })
        let goback=document.getElementById('goback')
        goback.addEventListener('click',()=>{
            //location.reload()
            songsdiv.innerHTML='';
            mainsongsdiv.style.display='none';
            mainalbumdiv.style.display='flex';
        })
    });
}