var homeContent = `<div class="site-container">
<div class="home">
  <section class="hero">
    <section class="white-bar"></section>
    <section class="Airplane">
      <section class="whitebar1"></section>
      <div class="callout1">
          <header class="travelflytitle">travel-fly <section class="para1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Fugiat aliquid minus nemo sed est.</section></header>
              <div class="learn-more">READ MORE</div>
          </div>
    </section>
  </section>
  <section class="promo-info">
    <section class="WomanWithCamera">
      <div class="callout2">
          <header>ISRAEL
              <section class="price1">from $1000</section>
          </header>
          <input class="firstButton" type="submit" value="LEARN MORE">
      </div>
    </section>
    <section class="ManOnLake">
      <div class="callout3">
          <header>U.S.A
              <section class="price2">from $1500</section>
          </header>
          <input class="secondButton" type="submit" value="LEARN MORE">
      </div>
    </section>
    <section class="ManOnBeach">
      <div class="callout4">
          <header>AUSTRAILIA
              <section class="price3">from $1800</section>
          </header>
          <input class="thirdButton" type="submit" value="LEARN MORE">
      </div>
    </section>
  </section>
  <section class="booking">
    <div class="booking-wrapper">
      <h1 class="booking-title">Booking Form</h1>
      <section class="top-form">
        <input class="name-form" type="name" placeholder="name..." />
        <input class="email-form" type="email" placeholder="email..." />
      </section>
      <section class="bottom-form">
        <input
          class="country-form"
          type="country"
          placeholder="country..."
        />
        <input class="hotel-form" type="hotel" placeholder="hotel..." />
      </section>
      <div class="long-input">
        <label class="title1" for="fName">Check In:</label>
        <input type="date" placeholder="mm/dd/yyyy"/>
      </div>
      <div class="long-input2">
        <label class="title2" for="Checko">Check Out:</label>
        <input type="date" />
      </div>
      <section class="age-boxes">
        <div class="adult">
          <label class="adulta" for="adulta">Adult:</label>
          <select name="Adult" id="adult">
              <option value="-">-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </select>
        </div>
        <div class="children">
          <label class="childrena" for="childrena">Children:</label>
          <select name="Children" id="children">
              <option value="-">-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </select>
        </div>
        <div class="rooms">
          <label class="roomsa" for="roomsa">Rooms:</label>
          <select name="Rooms" id="rooms">
              <option value="-">-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </select>
        </div>
      </section>
      <div class="message-box">
        <input type="text" placeholder="message..." />
      </div>
      <input class="booking-submit" type="submit" value="Submit" />
    </div>
  </section>
</div></div>`;

var aboutContent = `<div class="site-container">
<div class="about-text"><span class="underline">ABOU</span>T:</div>
<p class="para-beneath">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
  quia non numquam eius modi tempora incidunt ut labore et dolore magnam
  aliquam quaerat voluptatem.
</p>
<div class="client-text">
  <span class="underline2">CLIENT QU</span>OTES:
</div>
<div class="clients">
  <section class="client-opinion">
    <div class="client-image-left">
      <section class="GirlClient"></section>
    </div>
    <div class="client-comment-right">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.
      <section class="name1">- Miranda Brown</section>
    </div>
  </section>
</div>
<div class="clients2">
  <section class="client-opinion2">
    <div class="client-image-left1">
      <section class="BoyClient"></section>
    </div>
    <div class="client-comment-right1">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.
      <section class="name2">- Johnathan wes</section>
    </div>
  </section>
</div>
</div>`;

var toursContent = `<div class="site-container">
<div class="heroimagetop">
  <div class="heroimage">
    <section class="toursbackground">
      <div class="callout">
        <header class="tourstitle">TOURS:</header>
      </div>
    </section>
  </div>
</div>
<div class="wrapper">
  <div class="tour">
    <section class="Israel">
      <h1>Israel</h1>
      <div class="price">from $1000</div>
      <div  class="learnmore">
        <form action="#">
          <input id="israel"
            class="learnmorebutton"
            type="Submit"
            value="LEARN MORE"
          />
        </form>
      </div>
    </section>
  </div>
  <div class="tour">
    <section class="U-S-A">
      <h1>U.S.A</h1>
      <div class="price">from $1500</div>
      <div class="learnmore">
        <form action="#">
          <input id="usa"
            class="learnmorebutton"
            type="Submit"
            value="LEARN MORE"
          />
        </form>
      </div>
    </section>
  </div>
  <div class="tour">
    <section class="AustraliaImage">
      <section><h1 class="Australia">Australia</h1></section>
      <div class="price">from $1800</div>
      <div class="learnmore">
        <form action="#">
          <input id="australia"
            class="learnmorebutton"
            type="Submit"
            value="LEARN MORE"
          />
        </form>
      </div>
    </section>
  </div>
  <div class="tour">
    <section class="NewZealandImage">
      <section><h1 class="NewZealand">New Zealand</h1></section>
      <div class="price">from $1200</div>
      <div class="learnmore">
        <form action="#">
          <input id="newzealand"
            class="learnmorebutton"
            type="Submit"
            value="LEARN MORE"
          />
        </form>
      </div>
    </section>
  </div>
  <div class="tour">
    <section class="France">
      <h1>France</h1>
      <div class="price">from $2500</div>
      <div class="learnmore">
        <form action="#">
          <input id="france"
            class="learnmorebutton"
            type="Submit"
            value="LEARN MORE"
          />
        </form>
      </div>
    </section>
  </div>
  <div class="tour">
    <section class="Egypt">
      <h1>Egypt</h1>
      <div class="price">from $900</div>
      <div class="learnmore">
        <form action="#">
          <input id="egypt"
            class="learnmorebutton"
            type="Submit"
            value="LEARN MORE"
          />
        </form>
      </div>
    </section>
  </div>
  <div class="tour">
    <section class="Japan">
      <h1>Japan</h1>
      <div class="price">from $1300</div>
      <div class="learnmore">
        <form action="#">
          <input id="japan"
            class="learnmorebutton"
            type="Submit"
            value="LEARN MORE"
          />
        </form>
      </div>
    </section>
  </div>
  <div class="tour">
    <section class="Canada">
      <h1>Canada</h1>
      <div class="price">from $2000</div>
      <div class="learnmore">
        <form action="#">
          <input id="canada"
            class="learnmorebutton"
            type="Submit"
            value="LEARN MORE"
          />
        </form>
      </div>
    </section>
  </div>
  <div class="tour">
    <section class="U-A-E">
      <h1>U.A.E</h1>
      <div class="price">from $3000</div>
      <div class="learnmore">
        <form action="#">
          <input id="uae"
            class="learnmorebutton"
            type="Submit"
            value="LEARN MORE"
          />
        </form>
      </div>
    </section>
  </div>
</div>
</div>`

var israelContent=`<div class="site-container">
<div class="heroimageisraeltop">
  <div class="heroimageisrael">
    <section class="israeltoursbackground">
      <div class="callout2">
        <header class="tourstitle2">ISRAEL TOUR PACKAGE:</header>
        <header class="tourtitlebottom">
          STARTING FROM $1000 (prices may vary)
        </header>
      </div>
    </section>
  </div>
</div>
<div class="israelgroup">
  <div class="israelphotos">
    <section class="firstisraelphoto"></section>
  </div>
  <div class="israelphotos2">
    <section class="secondisraelphoto"></section>
  </div>
  <div class="israelphotos3">
    <section class="thirdisraelphoto"></section>
  </div>
</div>
<section class="daysparagraphs">
  <div class="day1">
    <div class="day1title"><span class="underline">Day#</span>1:</div>
    <p class="day1paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day2">
    <div class="day2title"><span class="underline2">Day#</span>2:</div>
    <p class="day2paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day3">
    <div class="day3title"><span class="underline3">Day#</span>3:</div>
    <p class="day3paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
</section>
<section class="booknowbutton">BOOK NOW</section>`;

var usaContent= `<div class="site-container">
<div class="heroimageusatop">
  <div class="heroimageusa">
    <section class="usatoursbackground">
      <div class="callout2">
        <header class="tourstitle2">U.S.A TOUR PACKAGE:</header>
        <header class="tourtitlebottom">
          STARTING FROM $1500 (prices may vary)
        </header>
      </div>
    </section>
  </div>
</div>
<div class="usagroup">
  <div class="usaphotos">
    <section class="firstusaphoto"></section>
  </div>
  <div class="usaphotos2">
    <section class="secondusaphoto"></section>
  </div>
  <div class="usaphotos3">
    <section class="thirdusaphoto"></section>
  </div>
</div>
<section class="daysparagraphs">
  <div class="day1">
    <div class="day1title"><span class="underline">Day#</span>1:</div>
    <p class="day1paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day2">
    <div class="day2title"><span class="underline2">Day#</span>2:</div>
    <p class="day2paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day3">
    <div class="day3title"><span class="underline3">Day#</span>3:</div>
    <p class="day3paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
</section>
<section class="booknowbutton">BOOK NOW</section>
</div>`

var australiaContent= `<div class="site-container">
<div class="heroimageaustraliatop">
  <div class="heroimageaustralia">
    <section class="australiatoursbackground">
      <div class="callout2">
        <header class="tourstitle2">AUSTRALIA TOUR PACKAGE:</header>
        <header class="tourtitlebottom">
          STARTING FROM $1800 (prices may vary)
        </header>
      </div>
    </section>
  </div>
</div>
<div class="australiagroup">
  <div class="australiaphotos">
    <section class="firstaustraliaphoto"></section>
  </div>
  <div class="australiaphotos2">
    <section class="secondaustraliaphoto"></section>
  </div>
  <div class="australiaphotos3">
    <section class="thirdaustraliaphoto"></section>
  </div>
</div>
<section class="daysparagraphs">
  <div class="day1">
    <div class="day1title"><span class="underline">Day#</span>1:</div>
    <p class="day1paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day2">
    <div class="day2title"><span class="underline2">Day#</span>2:</div>
    <p class="day2paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day3">
    <div class="day3title"><span class="underline3">Day#</span>3:</div>
    <p class="day3paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
</section>
<section class="booknowbutton">BOOK NOW</section>
</div>`

var newzealandContent= `<div class="site-container">
<div class="heroimagenewzealandtop">
  <div class="heroimagenewzealand">
    <section class="newzealandtoursbackground">
      <div class="callout2">
        <header class="tourstitle2">New Zealand TOUR PACKAGE:</header>
        <header class="tourtitlebottom">
          STARTING FROM $1200 (prices may vary)
        </header>
      </div>
    </section>
  </div>
</div>
<div class="newzealandgroup">
  <div class="newzealandphotos">
    <section class="firstnewzealandphoto"></section>
  </div>
  <div class="newzealandphotos2">
    <section class="secondnewzealandphoto"></section>
  </div>
  <div class="newzealandphotos3">
    <section class="thirdnewzealandphoto"></section>
  </div>
</div>
<section class="daysparagraphs">
  <div class="day1">
    <div class="day1title"><span class="underline">Day#</span>1:</div>
    <p class="day1paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day2">
    <div class="day2title"><span class="underline2">Day#</span>2:</div>
    <p class="day2paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day3">
    <div class="day3title"><span class="underline3">Day#</span>3:</div>
    <p class="day3paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
</section>
<section class="booknowbutton">BOOK NOW</section>
</div>`

var franceContent=`<div class="site-container">
<div class="heroimagefrancetop">
  <div class="heroimagefrance">
    <section class="francetoursbackground">
      <div class="callout2">
        <header class="tourstitle2">FRANCE TOUR PACKAGE:</header>
        <header class="tourtitlebottom">
          STARTING FROM $2500 (prices may vary)
        </header>
      </div>
    </section>
  </div>
</div>
<div class="francegroup">
  <div class="francephotos">
    <section class="firstfrancephoto"></section>
  </div>
  <div class="francephotos2">
    <section class="secondfrancephoto"></section>
  </div>
  <div class="francephotos3">
    <section class="thirdfrancephoto"></section>
  </div>
</div>
<section class="daysparagraphs">
  <div class="day1">
    <div class="day1title"><span class="underline">Day#</span>1:</div>
    <p class="day1paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day2">
    <div class="day2title"><span class="underline2">Day#</span>2:</div>
    <p class="day2paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day3">
    <div class="day3title"><span class="underline3">Day#</span>3:</div>
    <p class="day3paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
</section>
<section class="booknowbutton">BOOK NOW</section>
</div>`

var egyptContent=`<div class="site-container">
<div class="heroimageegypttop">
  <div class="heroimageegypt">
    <section class="egypttoursbackground">
      <div class="callout2">
        <header class="tourstitle2">EGYPT TOUR PACKAGE:</header>
        <header class="tourtitlebottom">
          STARTING FROM $900 (prices may vary)
        </header>
      </div>
    </section>
  </div>
</div>
<div class="egyptgroup">
  <div class="egyptphotos">
    <section class="firstegyptphoto"></section>
  </div>
  <div class="egyptphotos2">
    <section class="secondegyptphoto"></section>
  </div>
  <div class="egyptphotos3">
    <section class="thirdegyptphoto"></section>
  </div>
</div>
<section class="daysparagraphs">
  <div class="day1">
    <div class="day1title"><span class="underline">Day#</span>1:</div>
    <p class="day1paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day2">
    <div class="day2title"><span class="underline2">Day#</span>2:</div>
    <p class="day2paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day3">
    <div class="day3title"><span class="underline3">Day#</span>3:</div>
    <p class="day3paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
</section>
<section class="booknowbutton">BOOK NOW</section>
</div>`

var japanContent=`<div class="site-container">
<div class="heroimagejapantop">
  <div class="heroimagejapan">
    <section class="japantoursbackground">
      <div class="callout2">
        <header class="tourstitle2">JAPAN TOUR PACKAGE:</header>
        <header class="tourtitlebottom">
          STARTING FROM $1300 (prices may vary)
        </header>
      </div>
    </section>
  </div>
</div>
<div class="japangroup">
  <div class="japanphotos">
    <section class="firstjapanphoto"></section>
  </div>
  <div class="japanphotos2">
    <section class="secondjapanphoto"></section>
  </div>
  <div class="japanphotos3">
    <section class="thirdjapanphoto"></section>
  </div>
</div>
<section class="daysparagraphs">
  <div class="day1">
    <div class="day1title"><span class="underline">Day#</span>1:</div>
    <p class="day1paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day2">
    <div class="day2title"><span class="underline2">Day#</span>2:</div>
    <p class="day2paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day3">
    <div class="day3title"><span class="underline3">Day#</span>3:</div>
    <p class="day3paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
</section>
<section class="booknowbutton">BOOK NOW</section>
</div>`

var canadaContent=`<div class="site-container">
<div class="heroimagecanadatop">
  <div class="heroimagecanada">
    <section class="canadatoursbackground">
      <div class="callout2">
        <header class="tourstitle2">CANADA TOUR PACKAGE:</header>
        <header class="tourtitlebottom">
          STARTING FROM $2000 (prices may vary)
        </header>
      </div>
    </section>
  </div>
</div>
<div class="canadagroup">
  <div class="canadaphotos">
    <section class="firstcanadaphoto"></section>
  </div>
  <div class="canadaphotos2">
    <section class="secondcanadaphoto"></section>
  </div>
  <div class="canadaphotos3">
    <section class="thirdcanadaphoto"></section>
  </div>
</div>
<section class="daysparagraphs">
  <div class="day1">
    <div class="day1title"><span class="underline">Day#</span>1:</div>
    <p class="day1paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day2">
    <div class="day2title"><span class="underline2">Day#</span>2:</div>
    <p class="day2paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day3">
    <div class="day3title"><span class="underline3">Day#</span>3:</div>
    <p class="day3paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
</section>
<section class="booknowbutton">BOOK NOW</section>
</div>`

var uaeContent=`<div class="site-container">

<div class="heroimageuaetop">
  <div class="heroimageuae">
    <section class="uaetoursbackground">
      <div class="callout2">
        <header class="tourstitle2">U.A.E. TOUR PACKAGE:</header>
        <header class="tourtitlebottom">
          STARTING FROM $3000 (prices may vary)
        </header>
      </div>
    </section>
  </div>
</div>
<div class="uaegroup">
  <div class="uaephotos">
    <section class="firstuaephoto"></section>
  </div>
  <div class="uaephotos2">
    <section class="seconduaephoto"></section>
  </div>
  <div class="uaephotos3">
    <section class="thirduaephoto"></section>
  </div>
</div>
<section class="daysparagraphs">
  <div class="day1">
    <div class="day1title"><span class="underline">Day#</span>1:</div>
    <p class="day1paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day2">
    <div class="day2title"><span class="underline2">Day#</span>2:</div>
    <p class="day2paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="day3">
    <div class="day3title"><span class="underline3">Day#</span>3:</div>
    <p class="day3paragraph">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
</section>
<section class="booknowbutton">BOOK NOW</section>
</div>`

var specialoffersContent = `<div class="site-container">
<section class="specialtitle">
  <span class="underlines">SPECIAL OF</span>FER(S):
</section>
<section class="containerone">
  <div class="left">
    <section class="barcelona"></section>
  </div>
  <div class="right">
    <header class="countrytitle">
      <span class="underlines2">BARCELON</span>A, SPAIN
      <span class="redpercent">(20% OFF!)</span>
    </header>
    <p class="countrypara">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.
    </p>
    <div class="learnmorebutton">LEARN MORE</div>
  </div>
</section>
<section class="containertwo">
  <div class="left">
    <section class="bangkok"></section>
  </div>
  <div class="right">
    <header class="countrytitle">
      <span class="underlines2">BANGKOK, T</span>HAILAND
      <span class="redpercent">(20% OFF!)</span>
    </header>
    <p class="countrypara">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.
    </p>
    <div class="learnmorebutton">LEARN MORE</div>
  </div>
</section>
</div>`;

var blogsContent = `<div class="site-container">
<section class="blogtitle">BLOG:</section>
<section class="containers">
  <section class="containerthree">
    <div class="leftone">
      <div class="box">
        <span class="text1"> 06 </span>
        <section class="text2">JUN</section>
      </div>
    </div>
    <div class="rightone">
      <section class="blogimage"></section>
      <div class="blogtitleone">
        Sed et persipiatis unde omnis iste natus
      </div>
      <p class="blogparaone">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo.
      </p>
    </div>
  </section>
  <section class="containerfour">
    <div class="leftone">
      <div class="box">
        <span class="text1"> 23 </span>
        <section class="text2">JUL</section>
      </div>
    </div>
    <div class="rightone">
      <section class="blogimage"></section>
      <div class="blogtitleone">
        Sed et persipiatis unde omnis iste natus
      </div>
      <p class="blogparaone">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo.
      </p>
    </div>
  </section>
</section>`;

var contactContent = `<div class="site-container">

<section class="contacttitle">
  <span class="underlines4">CONTACT</span> US:
</section>
<section class="containerfive">
  <div class="contactform">
    <section class="map">
      <div class="mapimage"></div>
      <div class="mapaddress">
        <section>travel-fly Inc.</section>
        <section>8901 Marmora Road,</section>
        <section>Glasgow, D04 89GR.</section>
        <section>Freephone:+1 800 559 6580</section>
        <section>Telephone:+1 800 603 6035</section>
        <section>FAX:+1 800 889 9898</section>
        <section>E-mail: mail@travelfly.org</section>
      </div>
    </section>
    <section class="contactboxes">
      <input
        class="textFields"
        type="text"
        name="yourname"
        id="yourname"
        placeholder="Your Name..."
      />
      <input
        class="textFields"
        type="text"
        name="email"
        id="email"
        placeholder="Email Address..."
      />
      <input
        class="textFields"
        type="text"
        name="company"
        id="company"
        placeholder="Company..."
      />
      <input
        class="textFieldsMessages"
        type="text"
        name="message"
        id="message"
        placeholder="Message..."
      />

      <input
        class="sendmessagebutton"
        type="button"
        value="SEND MESSAGE"
      />
    </section>
  </div>
</section>
`;



export function changePageContent(pageID)
{
    let pageName = pageID + "Content";
    $("#app").html(eval(pageName));
    if(pageID == "home"){
        $("#nav-holder").addClass("whiteNav");
        $("#nav-holder").removeClass("blackNav");
    } else {
        $("#nav-holder").addClass("blackNav");
        $("#nav-holder").removeClass("whiteNav");
    }

}