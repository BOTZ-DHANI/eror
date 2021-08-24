__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')
}

var creatorList = ['Hafidz Abdillah', 'Hafidz Abdillah.'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];


var key = 'EkakeY' // Apikey Lu Ngab

var ffmpeg = require('fluent-ffmpeg');
var upload = require(__path + '/lib/upload.js');
var imageToBase64 = require('image-to-base64');
var axios = require('axios');
var FormData = require('form-data');
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var router  = express.Router();

var { tts, wait, simih, getBuffer, h2k, banner, getRandom, start, info, success, close, pickRandom } = require(__path + '/lib/functions.js');
var { RemoveBg } = require('remove.bg');
var { tahta } = require(__path + '/lib/tahta.js');
var { createHash } = require('crypto')
var { spawn, exec } = require('child_process');
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var { recognize } = require(__path + '/lib/ocr.js')
var options = require(__path + '/lib/options.js');
var {
	Nulis,
	Vokal,
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey',
        getApikey: 'Akses Apikey Tidak Di izin Kan'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Akses Apikey Tidak Di izin Kan'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikey, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    }
}

var error = __path + '/views/error.html' // Error

var invalidKey = __path + '/views/invalidKey.html' // Apikey Invalid
var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------Hafidzz'+'HafidzAbdillah';
        
 
router.get('/find', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != 'freeapi') return res.sendFile(invalidKey)

    try {
        zahirr.find()
            .then(result => {
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result
                })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/truth', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://alpin-api-2021.herokuapp.com/api/truth?apikey=alpin1`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/dare', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
	

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://alpin-api-2021.herokuapp.com/api/dare?apikey=alpin1`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/resep', async (req, res, next) => {
        var apikey = req.query.apikey,
            makanan = req.query.makanan
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
    if (!makanan) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter makanan"})

       fetch(encodeURI(`https://masak-apa-tomorisakura.vercel.app/api/search/?q=${makanan}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/cekapikey', async(req, res, next) => {
  var apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)) {
  	var limit = '1000'
    res.json({
      creator: 'Hafidz Abdillah',
      status: 'true',
      apikey: `${apikey}`,
      message: 'APIKEY ACTIVE'
    })
  } else {
    res.sendFile(invalidKey)
  }
})



const listkey = ["sayahafiz", "danugans"];

router.get('/tiktod', async (req, res, next) => {
    var apikey = req.query.apikey,
        url = req.query.url


	if(!apikey) return res.json(loghandler.notparam)
	if(apikey.includes(listkey)) return res.sendFile(invalidKey)
     if (!url) return res.json(loghandler.noturl)

     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.invalidlink)
         })
})

router.get('/ssweb', async (req, res, next) => {

        var apikey = req.query.apikey,
	       url = req.query.url

   if(!apikey) return res.json(loghandler.notparam)
  	if(apikey != 'freeapi') return res.sendFile(invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

     var hasil = await getBuffer(`http://nurutomo.herokuapp.com/api/ssweb?url=${url}`)
          res.sendFile(hasil)

         
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/store', async (req, res, next) => {
        var apikey = req.query.apikey,
            search = req.query.search
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/playstore?apikey=sayahafiz&query=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/mediafire', async (req, res, next) => {
        var apikey = req.query.apikey;
            url = req.query.url;
           
	if(!apikey) return res.json(loghandler.notparam)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
       
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/mediafire?url=${url}&apikey=SayaHafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/covid', async (req, res, next) => {
        var apikey = req.query.apikey;
            
	if(!apikey) return res.json(loghandler.notparam)


       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/corona/global?apikey=sayahafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/jadwalbola', async (req, res, next) => {
        var apikey = req.query.apikey;
           
            
	if(!apikey) return res.json(loghandler.notparam)
        
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/jadwalbola?apikey=SayaHafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/storeinfo', async (req, res, next) => {
        var apikey = req.query.apikey,
            nama = req.query.nama
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})

       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/search/playstore-info?id=${nama}&apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/google', async (req, res, next) => {
        var apikey = req.query.apikey,
            search = req.query.search
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
    if (!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://api.lolhuman.xyz/api/gsearch?apikey=sayahafiz&query=${search}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 data
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/gempa', async (req, res, next) => {
        var apikey = req.query.apikey;
            
	if(!apikey) return res.json(loghandler.notparam)

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/infogempa?apikey=sayahafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/heroml', async (req, res, next) => {
        var apikey = req.query.apikey;
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/others/listheroml?apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/ytmp3', async (req, res, next) => {
          var apikey = req.query.apikey;
            url = req.query.url;
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
       
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/ytdl?url=${url}&apikey=SayaHafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/playmp3', async (req, res, next) => {
        var apikey = req.query.apikey;
            judul = req.query.judul;
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!judul) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})
       
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/playmp3?q=${judul}&apikey=SayaHafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/ytmp4', async (req, res, next) => {
        var apikey = req.query.apikey;
            url = req.query.url;
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/ytdl?url=${url}&apikey=SayaHafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/ucapan', async (req, res) => {
        timeZone = req.query.timeZone
    if (!timeZone) return res.json({ status : false, creator : `Hafidz Abdillah`, message : "masukan parameter timeZone"})

    try {
     WaktuJKt = new Date().toLocaleString("en-US", {timeZone: timeZone});

		function tamHari(WaktuJKt){
            var date = new Date(WaktuJKt);
            var waktoo = date.getHours();
            switch(waktoo){
                case 0: waktoo = "Tengah Malam🌚"; break;
                case 1: waktoo = "Tengah Malam🌒"; break;
                case 2: waktoo = "Dini Hari🌒"; break;
                case 3: waktoo = "Dini Hari🌓"; break;
                case 4: waktoo = "Subuh🌔"; break;
                case 5: waktoo = "Subuh🌔"; break;
                case 6: waktoo = "Pagi🌝"; break;
                case 7: waktoo = "Pagi🌝"; break;
                case 8: waktoo = "Pagi🌝"; break;
                case 9: waktoo = "Pagi"; break;
                case 10: waktoo = "Pagi🌞"; break;
                case 11: waktoo = "Siang🌞"; break;
                case 12: waktoo = "Siang🌞"; break;
                case 13: waktoo = "Siang🌞"; break;
                case 14: waktoo = "Siang🌞"; break;
                case 15: waktoo = "Sore🌝"; break;
                case 16: waktoo = "Sore🌝"; break;
                case 17: waktoo = "Sore🌖"; break;
                case 18: waktoo = "Magrib🌘"; break;
                case 19: waktoo = "Magrib🌚"; break;
                case 20: waktoo = "Malam🌚"; break;
                case 21: waktoo = "Malam🌚"; break;
                case 22: waktoo = "Malam🌚"; break;
                case 23: waktoo = "Tengah Malam🌚"; break;
            }
            var tampilHari = "" + waktoo;
            return `${tampilHari}`
        }

    res.json({
        status: true,
        creator: `Hafidz Abdillah`,
        message: `Jangan Lupa Follow Ig @hafidzabdillh_`,
        result : tamHari(WaktuJKt)
    })
    } catch (e) {
        console.log(e)
        res.json({ status : false, creator : `Hafidz Abdillah`, message : "Eror, Harap Lapor Ke owner"})
    }

})

router.get('/siapakah', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
        

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/fun/siapakah?apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/hitungmundur', async (req, res) => {
        bulan = req.query.bulan
        tanggal = req.query.tanggal

    if (!bulan) return res.json({ status : false, creator : `Hafidz Abdillah`, message : "masukan parameter bulan"})
    if (!tanggal) return res.json({ status : false, creator : `Hafidz Abdillah`, message : "masukan parameter tanggal"})

    try {
    var countDownDate = new Date(`${bulan} ${tanggal}, 2021 00:00:00`).getTime();
        var now = new Date().getTime();

		function kurangwaktu(waktunya, waktuskrg){
			var distance = waktunya - waktuskrg;
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
		}

    res.json({
        status: true,
        creator: `Hafidz Abdillah`,
        message: `Jangan Lupa Follow Ig @hafidzabdillh_`,
        result : kurangwaktu(countDownDate, now)
    })
    } catch (e) {
        console.log(e)
        res.json({ status : false, creator : `Hafidz Abdillah`, message : "Eror, Harap Report Ke Owner"})
    }

})

router.get('/jarak', async (req, res, next) => {
        var apikey = req.query.apikey,
            asal = req.query.asal,
            tujuan = req.query.tujuan
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!asal) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter asal"})
    if (!tujuan) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tujuan"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=sayahafiz&kota1=${asal}&kota2=${tujuan}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/nsfwcek', async (req, res, next) => {
        var apikey = req.query.apikey,
            url = req.query.url
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=sayahafiz&img=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})



router.get('/rscovid', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
	
    
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://alpin-api-2021.herokuapp.com/api/covid19?apikey=alpin1`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/sekolah', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){ 
       fetch(encodeURI(`https://alpin-api-2021.herokuapp.com/api/sekolah?apikey=alpin1`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/stalkgh', async (req, res, next) => {
        var apikey = req.query.apikey,
            username = req.query.username
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
       
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://alpin-api-2021.herokuapp.com/api/stalk/github?username=${username}&apikey=alpin1`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/joox', async (req, res, next) => {
        var apikey = req.query.apikey;
            url = req.query.url;
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
       
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/joox/${url}?apikey=sayahafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/igvidio', async (req, res, next) => {
        var apikey = req.query.apikey,
            url = req.query.url
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/instagram/video?url=${url}&apikey=SayaHafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/ig', async (req, res, next) => {
        var apikey = req.query.apikey,
            username = req.query.username
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
    
      if(listkey.includes(apikey)){
       fetch(encodeURI(`http://fdz-app.herokuapp.com/api/stalkig?username=${username}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/tiktod/stalk', async (req, res, next) => {
    var apikey = req.query.apikey,
        username = req.query.username

	if(!apikey) return res.json(loghandler.notparam)
    if (!username) return res.json(loghandler.notusername)

    if(listkey.includes(apikey)){
    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "e rror, mungkin username anda tidak valid"
             })
         })
} else {
  res.sendFile(invalidKey)
}
})


router.get('/katailham', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=SayaHafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get("/addkey", async (req, res, next) => {

  const key = req.query.key;
  

  if(listkey.includes(key)) {
    res.json({
      message: 'apikey sudah terdaftar'
    });
  } else {
    listkey.push(key);
    res.json({
      status: 'succes',
      message: `berhasil mendaftarkan ${key} Kedatabase apikey`
    });
  }
});

router.get("/deletekey", async(req, res, next) => {

	const key = req.query.delete;

	if(listkey.includes(key)) {
		res.json({
		  status: 'false',
			message: 'apikey tidak ada sebelumnya'
			})
			} else {
	listkey.splice(key, 1)
	res.json({
	  status: 'succes',
		message: 'apikey berhasil dihapus' 
});
 }
});


router.get('/nama', async (req, res, next) => {
        var apikey = req.query.apikey,
            nama = req.query.nama
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})

       if(listkey.includes(apikey)){  
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/fun/artinama?nama=${nama}&apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/zodiak', async (req, res, next) => {
        var apikey = req.query.apikey,
            zodiak = req.query.zodiak
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!zodiak) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter zodiak"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/zodiak/${zodiak}?apikey=sayahafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/mimpi', async (req, res, next) => {
        var apikey = req.query.apikey,
            mimpi = req.query.mimpi
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!mimpi) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter mimpi"})
       
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/fun/artimimpi?mimpi=${mimpi}&apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: 'Hafidz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/ramal', async (req, res, next) => {
        var apikey = req.query.apikey,
            pasangan1 = req.query.pasangan1,
            pasangan2 = req.query.pasangan2
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!pasangan1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pasangan 1"})
    if (!pasangan2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pasangan 2"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/fun/jodoh?nama1=${pasangan1}&nama2=${pasangan2}&apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/cerpen', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/fun/cerpen?apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/coming', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
	

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/movie/comingsoon?apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/oskop', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/movie/jadwalbioskop?apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/randomquote', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	

      if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/random/quotes?apikey=sayahafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/infonpm', async (req, res, next) => {
        var apikey = req.query.apikey,
            query = req.query.query
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `succes`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/tiny', async (req, res, next) => {
    var apikey = req.query.apikey,
        url = req.query.url

	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `succes`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
})

router.get('/string', async (req, res, next) => {
        var apikey = req.query.apikey,
            text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/convert/strtohex?apikey=sayahafiz&text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/hex', async (req, res, next) => {
        var apikey = req.query.apikey,
            code = req.query.code
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!code) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter code"})

       if(listkey.includes(apikey)){ 
       fetch(encodeURI(`https://api.lolhuman.xyz/api/convert/hextostr?apikey=sayahafiz&hex=${code}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/maker/attp', async(req, res, next) => {
  text = req.query.text;
  var apikey = req.query.apikey;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://dapuhy-api.herokuapp.com/api/maker/attp?text=' + text + '&apikey=dor_dor'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/attp.gif', data)
  res.sendFile(__path +'/tmp/attp.gif')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		apikey = req.query.apikey;
		if (!apikey) return res.json(loghandler.notparam)
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if(listkey.includes(apikey)){
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
} else {
  res.sendFile(invalidKey)
}
})


router.get('/textmaker/game', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikey = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'pubg' && theme != 'battlefield') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'pubg') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=6346fb5fe9b50aa3eb40e3c2f04ad3c9&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        dee_url = data.data.dee_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `succes`,
                                            result:{
                                                url:urlnya,
                                                dee_url: dee_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'battlefield') {
        	if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=6346fb5fe9b50aa3eb40e3c2f04ad3c9&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        dee_url = data.data.dee_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `succes`,
                                            result:{
                                                url:urlnya,
                                                dee_url: dee_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/senja', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikey = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'coffee-cup' && theme != 'coffee-cup2') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'coffee-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=6346fb5fe9b50aa3eb40e3c2f04ad3c9&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        dee_url = data.data.dee_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `succes`,
                                            result:{
                                                url:urlnya,
                                                dee_url: dee_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'coffee-cup2') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=6346fb5fe9b50aa3eb40e3c2f04ad3c9&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        dee_url = data.data.dee_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `succes`,
                                            result:{
                                                url:urlnya,
                                                dee_url: dee_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		apikey = req.query.apikeym;

		if (!apikey) return res.json(loghandler.notparam)
		
		if(listkey.includes(apikey)){
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: 'Hafidz abdillh',
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/infogempa', async (req, res, next) => {
	        var apikey = req.query.apikey

		if (!apikey) return res.json(loghandler.notparam)
		if (apikey != 'freeapi') return res.sendFile(invalidKey)
		Gempa()
		.then(result => {
			res.json({
				creator: 'Hafidz abdillah',
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/hadits', async (req, res, next) => {
        var apikey = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})
       
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/quran', async (req, res, next) => {
        var apikey = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})
       
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/fbdown', async (req, res, next) => {
        var apikey = req.query.apikey;
            url = req.query.url;
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/textmaker/metallic', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikey = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'neon' && theme != 'glow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'neon') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=6346fb5fe9b50aa3eb40e3c2f04ad3c9&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        dee_url = data.data.dee_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `succes`,
                                            result:{
                                                url:urlnya,
                                                dee_url: dee_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'glow') {
            request.post({
                url: "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=6346fb5fe9b50aa3eb40e3c2f04ad3c9&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        dee_url = data.data.dee_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `succes`,
                                            result:{
                                                url:urlnya,
                                                dee_url: dee_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/alam', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikey = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'summer' && theme != 'flower') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'summer') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=6346fb5fe9b50aa3eb40e3c2f04ad3c9&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        dee_url = data.data.dee_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `succes`,
                                            result:{
                                                url:urlnya,
                                                dee_url: dee_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'flower') {
            request.post({
                url: "https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=6346fb5fe9b50aa3eb40e3c2f04ad3c9&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        dee_url = data.data.dee_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `succes`,
                                            result:{
                                                url:urlnya,
                                                dee_url: dee_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/muslim/wirid', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	     
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/muslim/doaharian', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
	     if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	    
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/muslim/niatisya', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/muslim/niatashar', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
	    
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/CyberSpace.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/teknologi', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Technology.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/muslim', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Islamic.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/programming', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Programming.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/pegunungan', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Mountain.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/grupwa', async (req, res, next) => {
        var apikey = req.query.apikey,
            search = req.query.search
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=${search}&apikey=SayaHafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/pinser', async (req, res, next) => {
        var apikey = req.query.apikey,
            search = req.query.search
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/pinterest?apikey=sayahafiz&query=${search}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 data
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/serstik', async (req, res, next) => {
        var apikey = req.query.apikey,
            nama = req.query.nama
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/stickerwa?apikey=sayahafiz&query=${nama}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
                 creator : `${creator}`,
                 data
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/wikipedia', async (req, res, next) => {
        var apikey = req.query.apikey,
            search = req.query.search
            
	if(!apikey) return res.json(loghandler.notparam)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/wiki?apikey=sayahafiz&query=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: `Hafidz Abdillah`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/tebakanime', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
    

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/tebakchara?apikey=sayahafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/stalkyt', async (req, res, next) => {
        var apikey = req.query.apikey,
            user = req.query.user
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!user) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter user"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/ytchannel?apikey=sayahafiz&query=${user}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/katadilan', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
    
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=sayahafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/ceritahoror', async (req, res, next) => {
        var apikey = req.query.apikey
           
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){     
       fetch(encodeURI(`https://api.lolhuman.xyz/api/ceritahoror?apikey=sayahafiz`))
        .then(response => response.json())
        .then(falsedata => {
        var result = data;
             res.json({
                 creator: `Hafidz Abdillah`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/randomquote/muslim', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/drakorasia', async (req, res, next) => {
        var apikey = req.query.apikey,
            search = req.query.search
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/cersex', async (req, res, next) => {
        var apikey = req.query.apikey,
            jenis = req.query.jenis
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!jenis) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter jenis"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/cersex-search?q=${jenis}&apikey=SayaHafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/cersex1', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
        

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=SayaHafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/shope', async (req, res, next) => {
        var apikey = req.query.apikey,
            produk = req.query.produk
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!produk) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter produk"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/shopee?apikey=sayahafiz&query=${produk}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/jadwalshalat', async (req, res, next) => {
        var apikey = req.query.apikey,
            kota = req.query.kota
            
	if(!apikey) return res.json(loghandler.notparam)
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/sholat/${kota}?apikey=sayahafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/faktaunik', async (req, res, next) => {
        var apikey = req.query.apikey
           
            
	if(!apikey) return res.json(loghandler.notparam)
        

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/fakta?apikey=SayaHafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/kubik', async (req, res, next) => {
        var apikey = req.query.apikey,
            angka = req.query.angka
            
	if(!apikey) return res.json(loghandler.notparam)
        if(!angka) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter angka"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/bdr/kubik?q=${angka}&apikey=SayaHafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/kuadrat', async (req, res, next) => {
        var apikey = req.query.apikey,
            angka = req.query.angka
            
	if(!apikey) return res.json(loghandler.notparam)
        if(!q) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter angka"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/bdr/kuadrat?q=${angka}&apikey=SayaHafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/fakedata', async (req, res, next) => {
        var apikey = req.query.apikey,
            country = req.query.country
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/hilih', async (req, res, next) => {
        var apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/holoh', async (req, res, next) => {
        var apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/vokal/holoh?kata=${kata}&apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/heleh', async (req, res, next) => {
        var apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/vokal/heleh?kata=${kata}&apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/huluh', async (req, res, next) => {
        var apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/vokal/huluh?kata=${kata}&apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/liriklagu', async (req, res, next) => {
        var apikey = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikey) return res.json(loghandler.notparam)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/lirik?apikey=sayahafiz&query=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/artikata', async (req, res, next) => {
        var apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/arti-kata?q=${kata}&apikey=SayaHafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/chordlagu', async (req, res, next) => {
        var apikey = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikey) return res.json(loghandler.notparam)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/random/asmaulhusna', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/kbbi', async (req, res, next) => {
        var apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!apikey) return res.json(loghandler.notparam)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/covidindo', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/covidworld', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kodepos', async (req, res, next) => {
        var apikey = req.query.apikey,
	    kota = req.query.kota
            
	if(!apikey) return res.json(loghandler.notparam)
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/cuaca', async (req, res, next) => {
        var apikey = req.query.apikey,
            kota = req.query.kota
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/cuaca/${kota}?apikey=sayahafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/hoax', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=sayahafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/infocuaca/bandara', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/bandara`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infocuaca/dunia', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/dunia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infotsunami', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/tsunami`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})




router.get('/random/meme', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/quotes/kanye', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=kanye`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/translate', async (req, res, next) => {
        var apikey = req.query.apikey,
	    kata = req.query.kata
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/jurnal', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
	
  
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://alpin-api-2021.herokuapp.com/api/jurnalotaku?apikey=alpin1`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/anime/listnom', async (req, res, next) => {
        var apikey = req.query.apikey,
	    nomor = req.query.nomor
            
	if(!apikey) return res.json(loghandler.notparam)
	if(!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})
	
	     if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/anime/mal-nomer?nomer=${nomor}&apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/anime/nameanime', async (req, res, next) => {
        var apikey = req.query.apikey,
	      search = req.query.search
            
	if(!apikey) return res.json(loghandler.notparam)
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
	 
	      if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/anime/mal-name?name=${search}&apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/anime/animeindo', async (req, res, next) => {
        var apikey = req.query.apikey,
	      search = req.query.search
            
	if(!apikey) return res.json(loghandler.notparam)
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
	
	     if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/anime/animeindo?query=${search}&apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/searchmanga', async (req, res, next) => {
        var apikey = req.query.apikey,
            judul = req.query.judul
            
	if(!apikey) return res.json(loghandler.notparam)
        if(!judul) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/search/mangatoon?query=${judul}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/manga', async (req, res, next) => {
        var apikey = req.query.apikey,
            judul = req.query.judul
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!judul) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.lolhuman.xyz/api/manga?apikey=sayahafiz&query=${judul}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/anime/kusonime', async (req, res, next) => {
        var apikey = req.query.apikey,
	      search = req.query.search
            
	if(!apikey) return res.json(loghandler.notparam)
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
	     
	     if(listkey.includes(apikey)){
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/gabut', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/bosan`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})




router.get('/random/wallpaper', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/random/wallpaper?genre=acak`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/jago', async (req, res, next) => {
        var apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/fun/jagokata?query=${kata}&apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/asah', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/fun/asahotak?apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 message : 'succes',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/tebakkata', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
    

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/tebak-kata?apikey=SayaHafiz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
              creator: 'Hafidz Abdillah', 
              result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/nebak', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/fun/tebakgambar?apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/famely', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/fun/family100?apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 message : 'succes',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/lontong', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/fun/caklontong?apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : 'Hafidz Abdillah',
                 message : 'succes',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/news/cnn', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
       
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/berita/cnn?apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/news/cnbc', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
    
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/berita/bcc?apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/news/republika', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
	
    
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/berita/republika?apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/news/tempo', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
	
    
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/berita/tempo?apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/news/antara', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
	
    
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/berita/antara?apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/news/okezone', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://dapuhy-api.herokuapp.com/api/berita/okezone?apikey=dor_dor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})


router.get('/filmapik/search', async (req, res, next) => {
        var apikey = req.query.apikey,
            film = req.query.film
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/search?q=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/filmapik/kategori', async (req, res, next) => {
        var apikey = req.query.apikey,
            film = req.query.film
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/category?search=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/filmapik/play', async (req, res, next) => {
        var apikey = req.query.apikey,
            id = req.query.id
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
    if (!id) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter id"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/play?id=${id}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/filmapik/terbaru', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/latest`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/search', async (req, res, next) => {
        var apikey = req.query.apikey,
            film = req.query.film
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/search?query=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/terbaru', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/newupload`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/comingsoon', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/comingsoon`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/tvseries', async (req, res, next) => {
        var apikey = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/tv`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/year', async (req, res, next) => {
        var apikey = req.query.apikey,
            tahun = req.query.tahun
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
    if (!tahun) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tahun"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/year?year=${tahun}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/country', async (req, res, next) => {
        var apikey = req.query.apikey,
            negara = req.query.negara
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
    if (!negara) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter negara"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/country?country=${negara}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/genre', async (req, res, next) => {
        var apikey = req.query.apikey,
            tipe = req.query.tipe
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
    if (!tipe) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tipe"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/genre?genre=${tipe}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/textmaker/random', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikey = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'text-burn' && theme != 'art-quote') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'text-burn') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=6346fb5fe9b50aa3eb40e3c2f04ad3c9&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        dee_url = data.data.dee_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `succes`,
                                            result:{
                                                url:urlnya,
                                                dee_url: dee_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'art-quote') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=6346fb5fe9b50aa3eb40e3c2f04ad3c9&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        dee_url = data.data.dee_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `succes`,
                                            result:{
                                                url:urlnya,
                                                dee_url: dee_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/roses', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikey = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'freeapi') return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'wooden-boarch' && theme != 'golden') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'wooden-boarch') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=6346fb5fe9b50aa3eb40e3c2f04ad3c9&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        dee_url = data.data.dee_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `succes`,
                                            result:{
                                                url:urlnya,
                                                dee_url: dee_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'golden') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=6346fb5fe9b50aa3eb40e3c2f04ad3c9&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        dee_url = data.data.dee_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `succes`,
                                            result:{
                                                url:urlnya,
                                                dee_url: dee_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})


module.exports = router
