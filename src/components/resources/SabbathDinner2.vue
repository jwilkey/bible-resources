<template>
  <div class="sabbath-dinner">
    <div class="printable">
      <div class="p2">
        <h1 class="main-title">Sabbath Dinner</h1>

        <div class="m2-bottom aye">
          <h3 class="title-label m1-bottom"><span><i class="far fa-bell p1-right" /> Greetings <i class="far fa-bell p1-left" /></span></h3>

          <p class="leader">There is one God! <span class="participant">Aye!</span></p>
          <p class="leader">God is glorious! <span class="participant">Aye!</span></p>
          <p class="leader">God made all things! <span class="participant">Aye!</span></p>
          <p class="leader">God made man in His image! <span class="participant">Aye!</span></p>
          <p class="leader">All persons are guilty of sin. <span class="participant">Aye!</span></p>
          <p class="leader">Jesus died to pay for our sins! <span class="participant">Aye!</span></p>
          <p class="leader">Jesus is King and master of all! <span class="participant">Aye!</span></p>
          <p class="leader">By faith alone man becomes God's child! <span class="participant">Aye!</span></p>
          <p class="leader">God's children live by Him, forever! <span class="participant">Aye!</span></p>
        </div>
        <p class="participant m1-top m2-bottom">The LORD is ______</p>

        <div class="scripture m2-top">
          <p class="leader">“Behold, God is my salvation; I will trust, and will not be afraid;</p>
          <p class="participant">for the LORD GOD is my strength and my song, and he has become my salvation.”</p>
          <p class="scripture-ref">- Isaiah 12:2</p>
        </div>

        <div class="m2-bottom">
          <h3 class="text-center uppercase font-2 m3-top m3-bottom"><span class="font3 p1-right">𝄞</span> A Psalm or Spiritual Song of Praise <span class="font3 p1-left">𝄞</span></h3>
        </div>

        <div class="scripture">
          <p class="leader">But to all who did receive him, who believed in his name,</p>
          <p  class="participant">he gave the right to become children of God</p>
          <p class="scripture-ref">- John 1:12</p>
        </div>

        <div class="scripture">
          <p class="leader">In him you also, when you heard the word of truth, the gospel of your salvation, and believed in him, were sealed with the promised Holy Spirit, </p>
          <p  class="participant">who is the guarantee of our inheritance until we acquire possession of it, to the praise of his glory.</p>
          <p class="scripture-ref">- Ephesians 1:14</p>
        </div>

        <div class="m2-bottom">
          <h3 class="text-center uppercase font-2 m3-top m3-bottom"><span class="font3 p1-right">𝄞</span> The Doxology <span class="font3 p1-left">𝄞</span></h3>
        </div>

        <div class="scripture">
          <p class="leader">Let us hold fast the confession of our hope without wavering,</p>
          <p class="participant">for he who promised is faithful.</p>
          <p class="leader">And let us consider how to stir up one another to love and good works</p>
          <p class="scripture-ref">- Hebrews 10:23-24</p>
        </div>

        <div class="m2-bottom">
          <h3 class="title-label"><span>Prayer</span></h3>
        </div>

        <p class="leader">Let us drink to our King, Jesus! <span class="tertiary2">—drink</span></p>
        <div class="leader">Let us eat, receiving this blessing from our King! <span class="tertiary2">—eat</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SabbathDinner'
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/app";

.sabbath-dinner {
  background-color: white;
  line-height: 140%;
  font-family: 'Crimson Text', serif;
}
.main-title {
  @extend .m2-bottom;
  @extend .p2-bottom;
  @extend .text-center;
  font-family: 'Rouge Script', cursive;
}
.title-label {
  position: relative;
  z-index: 1;
  @extend .text-center;
  @extend .uppercase;
  @extend .font-1;
  &:before {
    @extend .border-top-tertiary3;
    content:"";
    margin: 0 auto;
    position: absolute;
    top: 50%; left: 0; right: 0; bottom: 0;
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
    @extend .tertiary2;
  }
}
</style>
