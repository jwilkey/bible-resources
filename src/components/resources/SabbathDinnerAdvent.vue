<template>
  <div class="sabbath-dinner">
    <div class="printable">
      <div class="p2">
        <h1 class="main-title">Sabbath Dinner</h1>

        <div class="m2-bottom aye">
          <h3 class="title-label m1-bottom">
            <span
              ><i class="far fa-bell p1-right" /> Greetings
              <i class="far fa-bell p1-left"
            /></span>
          </h3>

          <p class="participant m1-top m2-bottom">The LORD is ______</p>

          <p class="leader">
            Jesus was born <span class="participant">Jesus was born</span>
          </p>
          <p class="leader">
            of the virgin Mary
            <span class="participant">of the virgin Mary</span>
          </p>
          <p class="leader">
            and the Holy Spirit
            <span class="participant">and the Holy Spirit</span>
          </p>
          <p class="leader">
            the Son of God <span class="participant">the Son of God</span>
          </p>
          <p class="leader">
            in Bethlehem <span class="participant">in Bethlehem</span>
          </p>
          <p class="leader">
            the City of David <span class="participant">the City of David</span>
          </p>
          <p class="leader">
            the newborn King <span class="participant">the newborn King</span>
          </p>
          <p class="leader">
            our King forever <span class="participant">our King forever</span>
          </p>
          <p class="leader">
            Hosana, amen! <span class="participant">Hosana, amen!</span>
          </p>

          <div class="scripture m2-top">
            <p class="leader">
              Now the birth of Jesus Christ took place in this way. When his
              mother Mary had been betrothed to Joseph, before they came
              together she was found to be with child from the Holy Spirit.
            </p>
            <p class="participant">
              And her husband Joseph, being a just man and unwilling to put her
              to shame, resolved to divorce her quietly.
            </p>
            <p class="leader">
              But as he considered these things, behold, an angel of the Lord
              appeared to him in a dream, saying,
            </p>
            <p class="participant">
              “Joseph, son of David, do not fear to take Mary as your wife, for
              that which is conceived in her is from the Holy Spirit. She will
              bear a son, and you shall call his name Jesus, for he will save
              his people from their sins.”
            </p>
            <p class="leader">
              All this took place to fulfill what the Lord had spoken by the
              prophet:
            </p>
            <p class="participant">
              “Behold, the virgin shall conceive and bear a son, and they shall
              call his name Immanuel”
            </p>
            <p class="leader">(which means, God with us).</p>
            <p class="scripture-ref">- Matthew 1:18-23</p>
          </div>
        </div>

        <div class="m2-bottom">
          <h3 class="text-center uppercase font-2">
            <span class="font3 p1-right">𝄞</span> A Christmas Hymn
            <span class="font3 p1-left">𝄞</span>
          </h3>
        </div>

        <div class="scripture">
          <p class="leader">
            “Blessed be the Lord God of Israel, for he has visited and redeemed
            his people
          </p>
          <p class="participant">
            and has raised up a horn of salvation for us in the house of his
            servant David,
          </p>
          <p class="leader">
            as he spoke by the mouth of his holy prophets from of old
          </p>
          <p class="scripture-ref">- Luke 1:68-70</p>
        </div>

        <div class="m2-bottom">
          <h3 class="text-center uppercase font-2 m3-top m3-bottom">
            <span class="font3 p1-right">𝄞</span> The Doxology
            <span class="font3 p1-left">𝄞</span>
          </h3>
        </div>

        <div class="m2-bottom">
          <h3 class="title-label"><span>Prayer</span></h3>
        </div>

        <p class="leader">
          Let us drink to our Savior, Jesus!
          <span class="tertiary2">—drink</span>
        </p>
        <div class="leader">
          Let us eat, receiving this blessing from our King!
          <span class="tertiary2">—eat</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SabbathDinnerAdvent",
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/app";

.sabbath-dinner {
  background-color: white;
  line-height: 140%;
  font-family: "Crimson Text", serif;
}
.main-title {
  @extend .m2-bottom;
  @extend .p2-bottom;
  @extend .text-center;
  font-family: "Rouge Script", cursive;
}
.title-label {
  position: relative;
  z-index: 1;
  @extend .text-center;
  @extend .uppercase;
  @extend .font-1;
  &:before {
    @extend .border-top-tertiary3;
    content: "";
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    width: 95%;
    z-index: -1;
  }
  span {
    background: #fff;
    padding: 0 15px;
  }
}
.leader {
  font-weight: 900;
  font-style: italic;
}
.participant {
  border-left: double 3px #cacaca;
  border-radius: 5px;
  padding-left: 4px;
}
.scripture {
  // box-shadow: 0 0 5px #888;
  border: solid 1px #ccc;
  @extend .p2;
  @extend .p1-top;
  @extend .p1-bottom;
  @extend .rounded;
  @extend .m2-bottom;
  sup {
    line-height: 1;
    @extend .tertiary2;
  }
}
.scripture-ref {
  @extend .text-right;
  @extend .tertiary2;
  @extend .font-2;
}
.printable {
  margin: auto;
  max-width: 6.2in;
}
.aye {
  .participant {
    @extend .m1-left;
    color: #777;
  }
}
</style>
