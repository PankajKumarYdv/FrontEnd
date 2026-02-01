# BOM 
> <em>Browser object model </em> <br>

Browser kuch object model bnaye hue hai, jisko humlog use krte hai. <br>
console  me jaa kr use krte hai. <br>
isko as a browser vender smaj lo jiska use kr k humlog script k help se apna kaam kr skte hai.

>sub window object k under aata hai. <br>
1. window.location  
2. window.screen <br>
`you can also skip window`
3. history 
4. innerHeight
5. `etc` 


# location
`Web page ka location related details ko show krta hai jaise ki...`

```javascript
{
    "ancestorOrigins": {},
    "href": "http://127.0.0.1:5500/",
    "origin": "http://127.0.0.1:5500",
    "protocol": "http:",
    "host": "127.0.0.1:5500",
    "hostname": "127.0.0.1",
    "port": "5500",
    "pathname": "/",
    "search": "",
    "hash": ""
}
```
## location method ka bhi kuch methods hai 
1. `location.reload()`  --> site ko reload krne k liya.
2. `location.replace('https://google.com')`  --> site ka change kr k diya hua site ko open kr deta hai.
3. `setTimeout` --> isko use krte hai koi event ko time limit set kr k run krne k liya.

```javascript
setTimeout(() => {
    // location.reload()
    location.replace('https://google.com')
},20000)
// 2000 - 2 sec 
```
4. `location.href = 'url'` --> site ko redirect krne k liya use krte hai.


# history
kisi particular tab me hum kitna page ko search kiya hai uska history show krta hai. 
```javascript
{
    length : 4
    scrollRestoration : 'auto'
    state : null 
    [[Prototype]]: History
}
```

yeha pr `length : 4` ye btana chata hai ki hum iss tab me 4 different pages ko visit kr chuka hai.<br>

> ye new tab me open kiya hua site ko count nhi krta hai. mtlb ki agr google pr search kiya w3school. aur jb result aaya tho uss pr click kiya tho wah page new site me open ho gya. uss case me 
`new opened page` ka history 1 hoga aur jaha pr search kiya tha uska jo phle tha wahi rhega, ye increase tb krega jb issi page me new visit ho. 

## history.back() / history.forward()
hum `back` or `forward` method se aage ya picha wala site pr  jaa skte hai. bina mouse ka use kiya. 
```javascript
history.back()
history.forward()
```
agr kisi tab me forward ya back, ka record nhi hoga tb `history.forward()`/ `history.back()`        `undefined` ho jyega aur page forward nhi jyega. 

## history.go()
iska use hum tb krte hai jb humko kisi particular length pr jana ho. 
jaise ki agr `history = 4` ho tb 
```javascript
history.go(-1)  // 1 back aayega.
history.go(-2)  // 2 back aayega

history.go(1)  // 1 forward jyega
history.go(2)  // 2 forward jyega
```

# innerHeigth & innerWidth & outerHeight & outerWidth 
inner wala inner height aur widht bta dega aur outer wala outer height our width show krega. 


Inner -> web page ka resolution `depends on brower zoom`
Outer -> pura screen ka resolution. `depends on your display size`

```javascript
innerHeight 
innerWidth

outerHeight
outerWidht 

outerHeight - innerHeight 
outerHeight + innerHeight
```

>` CTRL + SHIFT + B : bookmark tab ko show or unshow krne k liya use kre.`

# open() & close()
open ya close krne k liya use krte hai. 

```javascript 
open('script.js')
open('https://google.com')

open('https://google.com','pankaj')
// ye phle google opne krega fir name naam ka variable me 'pankaj' store kr dega. 
// ye 'pankaj' sirf issi wala page pr visiable rhega, khud se khola hua ya upr wala 2nd wala ka page pr show nhi krega, site same rhe yaa na rhe. 
```

`close()` iska use hum tab ko close krne k liya krte hai. 

# resizeTo() & resizeBy() & moveTo() & moveTo() & moveBy()
ye method sirf ussi page pr kaam krega jisko hum open() method k use k open kiya hai. 
sntx me ek aur element add krna hoga.
`open('https://youtube.com/', 'pankaj', 'resizable')`
humko `resizable` method ka use krna padega.

`open method k use se khula hua page pr hum inn sb methods ka use kr skte hai. `
```javascript 
resizeTo(600, 500)
// 600 -> widht
// 500 -> height

resizeBy(32,48)
// 32 -> X 
// 48 -> Y
// X,Y ko add kr dega negative value bhi de skte hai kum krne k liya. 


moveTo(1,20)
// 1 = x axis 
// 20 = Y axis
// These are the coordinares of the screen. we use it to move the opened window. 

moveBy(2,3)
// it add the given values to the original one. 


```

# scrollTo() & scrollBy()
iska use webpage ko  scrol krne k liya krte hai. 
```javascript 
scrolTo(0,23)
// 0 - X axis 
// 23 - Y axis

scrollBy(0,50)
// 0 - X axis 
// 50 - Y axis 
// ye method original wale me add kr dega.

```

# print()
use to print the webpage. 

# DOM
`Document Object Model`  

