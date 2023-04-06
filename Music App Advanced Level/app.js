const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `Girls Like You <br><div class="subtitle">Maroon 5</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg",
    },
    {
        id:'17',
        songName:` Banjaara <br><div class="subtitle">Mohammed Irfan </div>`,
        poster: "img/17.jpg"
    },
    // all object type 
    {
        id:"18",
        songName: `LOVE DOSE <br><div class="subtitle"> HONEY SINGH </div>`,
        poster: "img/18.jpg",
    },
    {
        id:"19",
        songName: `Pehli Nazar Mein <br> <div class="subtitle">Atif Aslam</div>`,
        poster: "img/19.jpg",
    },
    {
        id:"20",
        songName: `Waka Waka <br><div class="subtitle">Shakira</div>`,
        poster: "img/20.jpg",
    },
    {
        id:"21",
        songName: `Jeena Jeena <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/21.jpg",
    },
    {
        id:"22",
        songName: `Kaun Tujhe <br><div class="subtitle">Palak Muchhal</div>`,
        poster: "img/22.jpg",
    },
    {
        id:"23",
        songName: `Kho Gaye Hum Kaha <br><div class="subtitle">Jasleen Royal</div>`,
        poster: "img/23.jpg",
    },
    {
        id:"24",
        songName: `Hasi <br><div class="subtitle">Ami Mishra</div>`,
        poster: "img/24.jpg",
    },
    {
        id:"25",
        songName: `Kabira <br><div class="subtitle">Rekha Bhardwaj</div>`,
        poster: "img/25.jpg",
    },
    {
        id:"26",
        songName: `Let Me Down Slowly <br><div class="subtitle">Alec Benjamin</div>`,
        poster: "img/26.jpg",
    },
    {
        id:"27",
        songName: `Bad Guy <br><div class="subtitle">Billie Eilish</div>`,
        poster: "img/27.jpg",
    },
    {
        id:"28",
        songName: `Blank Space <br><div class="subtitle">Taylor</div>`,
        poster: "img/28.jpg",
    },
    {
        id:"29",
        songName: `Daru Badnaam <br><div class="subtitle">Kamal Kahlon and <br> Param Singh</div>`,
        poster: "img/29.jpg",
    },
    {
        id:"30",    
        songName: `De Ghumake <br><div class="subtitle">Shankar Mahadevan</div>`,
        poster: "img/30.jpg",
    },
    {
        id: '31',
        songName: `Drag me down <br><div class="subtitle">One Direction</div>`,
        poster: 'img/31.jpg',
      },
      {
        id: '32',
        songName: `Night Changes <br><div class="subtitle">One Direction</div>`,
        poster: "img/31.jpg",
      },
      {
        id: '33',
        songName: `Steal My girl <br><div class="subtitle">One Direction</div>`,
        poster: 'img/31.jpg',
      },
      {
        id: '34',
        songName: `Mix <br><div class="subtitle">One Direction</div>`,
        poster: 'img/31.jpg',
      },
      {
        id: '35',
        songName: `Perfect <br><div class="subtitle">One Direction</div>`,
        poster: 'img/31.jpg',
      },
      {
        id: '36',
        songName: `Anti-Hero <br><div class="subtitle">taylor Swift</div>`,
        poster: 'img/36.png',
      },
      {
        id: '37',
        songName: ` Lavender Haze <br><div class="subtitle">taylor Swift</div>`,
        poster: 'img/37.png',
      },
      {
        id: '38',
        songName: `Dont't blame me <br><div class="subtitle">taylor Swift</div>`,
        poster: 'img/38.png',
      },
      {
        id: '39',
        songName: ` Blank Space<br><div class="subtitle">taylor Swift</div>`,
        poster: 'img/39.png',
      },
      {
        id: '40',
        songName: ` Willow <br><div class="subtitle">taylor Swift</div>`,
        poster: 'img/40.png',
      },
  
      {
        id: '41',
        songName: ` END GAME<br><div class="subtitle">taylor Swift</div>`,
        poster: 'img/41.png',
      },
      {
        id: '42',
        songName: ` Delicate<br><div class="subtitle">taylor Swift</div>`,
        poster: 'img/42.png',
      },
      {
        id: '43',
        songName: ` So it Goes <br><div class="subtitle">taylor Swift</div>`,
        poster: 'img/43.png',
      },
      {
        id: '44',
        songName: ` King of your heart <br><div class="subtitle">taylor Swift</div>`,
        poster: 'img/44.png',
      },
      {
        id: '45',
        songName: ` TS9<br><div class="subtitle">taylor Swift</div>`,
        poster: 'img/45.png',
      },
      {
        id: '46',
        songName: ` Kaha tak<br><div class="subtitle">Kr$na</div>`,
        poster: 'img/46.png',
      },
      {
        id: '47',
        songName: ` All these years<br><div class="subtitle">Camila Cabello</div>`,
        poster: 'img/47.png',
      },
      {
        id: '48',
        songName: ` Scared to be lonely<br><div class="subtitle">Martin Garrix ft. Dua Lipa</div>`,
        poster: 'img/48.png',
      },
      {
        id: '49',
        songName: ` Stay together<br><div class="subtitle">Noah Cyrus</div>`,
        poster: 'img/49.png',
      },
      {
        id: '50',
        songName: ` Counting stars<br><div class="subtitle">One Republic</div>`,
        poster: 'img/50.png',
      },
      {
        id: '51',
        songName: ` Something Big<br><div class="subtitle">Shawn Mendes</div>`,
        poster: 'img/51.png',
      },
      {
        id: '52',
        songName: ` Treat you better<br><div class="subtitle">Shawn Mendes</div>`,
        poster: 'img/52.png',
      },
      {
        id: '53',
        songName: ` Symphony<br><div class="subtitle">SICK INDIVIDUALS ft. Nevve</div>`,
        poster: 'img/53.png',
      },
      {
        id: '54',
        songName: ` Paris<br><div class="subtitle">The chainsmokers</div>`,
        poster: 'img/54.png',
      },
      {
        id: '55',
        songName: ` All we know<br><div class="subtitle">The chainsmokers</div>`,
        poster: 'img/55.png',
      },
      {
        id: '56',
        songName: ` Somebody to you<br><div class="subtitle">The vamps ft. Demi Lovato</div>`,
        poster: 'img/56.png',
      },
      {
        id: '57',
        songName: ` Walk through fire<br><div class="subtitle">Vicetone ft. Meron Ryan</div>`,
        poster: 'img/57.png',
      },
      {
        id: '58',
        songName: ` In my blood<br><div class="subtitle">Shawn Mendes</div>`,
        poster: 'img/58.png',
      },
      {
        id: '59',
        songName: ` Dreaming alone<br><div class="subtitle">Against the current ft. Taka</div>`,
        poster: 'img/59.png',
      },
      {
        id: '60',
        songName: ` Oh Cecilia<br><div class="subtitle">The Vamps ft. Shawn Mendes</div>`,
        poster: 'img/60.png',
      },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    // console.log(element.getElementsByTagName('img')[0])
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})
let i = 6;
Array.from(document.getElementsByClassName('img_play')).forEach((element)=>{
    // console.log(element.childNodes[1]);
    element.childNodes[1].src = songs[i].poster;
    // console.log(element.childNodes[1].src);
    i++;
})

i = 15;
Array.from(document.getElementsByClassName('img_play1')).forEach((element)=>{
    // console.log(element.parentElement.children[1]);
    element.childNodes[1].src = songs[i].poster;
    element.parentElement.children[1].innerHTML = songs[i].songName;
    // console.log(element.childNodes[1].src);
    i++;
})

i = 24;
Array.from(document.getElementsByClassName('img_play2')).forEach((element)=>{
    // console.log(element.parentElement.children[1]);
    element.childNodes[1].src = songs[i].poster;
    element.parentElement.children[1].innerHTML = songs[i].songName;
    // console.log(element.childNodes[1].src);
    i++;
})
// element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
i = 29;
Array.from(document.getElementsByClassName('img_play3')).forEach((element)=>{
    // console.log(element.parentElement.children[1]);
    element.childNodes[1].src = songs[i].poster;
    element.parentElement.children[1].innerHTML = songs[i].songName;
    // console.log(element.childNodes[1].src);
    i++;
})
i = 35;
Array.from(document.getElementsByClassName('img_play4')).forEach((element)=>{
    // console.log(element.parentElement.children[1]);
    element.childNodes[1].src = songs[i].poster;
    element.parentElement.children[1].innerHTML = songs[i].songName;
    // console.log(element.childNodes[1].src);
    i++;
})

i = 35;
Array.from(document.getElementsByClassName('img_play4')).forEach((element)=>{
    // console.log(element.parentElement.children[1]);
    element.childNodes[1].src = songs[i].poster;
    element.parentElement.children[1].innerHTML = songs[i].songName;
    // console.log(element.childNodes[1].src);
    i++;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scroll');
let right_scrolls = document.getElementById('right_scroll');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})



