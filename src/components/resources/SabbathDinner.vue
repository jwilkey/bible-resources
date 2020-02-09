<template>
  <div class="sabbath-dinner">
    <div class="printable">
      <div class="p2">
        <h1 class="main-title">Sabbath Dinner</h1>

        <div class="m2-bottom">
          <h3 class="title-label"><span><i class="far fa-bell p1-right" /> Prelude <i class="far fa-bell p1-left" /></span></h3>
          <div class="leader p2-left p2-right text-center">
            <p>On Saturday evenings we prepare our hearts for the Sabbath day.</p>
            <p>This is the Lord's day...</p>
          </div>
        </div>

        <div class="m2-bottom">
          <h3 class="title-label"><span>Greetings</span></h3>
          <p class="leader">name</p>
          <p class="participant">Here I am</p>
          <p class="leader">The LORD our God, the LORD is one. You shall love the LORD your God withall your heart and with all your soul and with all your might.</p>
          <p class="participant">The LORD is ______</p>
        </div>

        <h3 class="title-label"><span>Worship</span></h3>
        <div class="scripture m2-top">
          <p class="leader">In the beginning,</p>
          <p class="participant">God created the heavens and the earth.</p>
          <p class="scripture-ref">- Genesis 1:1</p>
        </div>

        <div class="m2-bottom">
          <h3 class="text-center uppercase font-2 m3-top m3-bottom"><span class="font3 p1-right">𝄞</span> A Psalm or Spiritual Song of Praise <span class="font3 p1-left">𝄞</span></h3>
        </div>

        <div class="scripture">
          <p class="leader"><sup>35</sup> Jesus said to them, “I am the bread of life; whoever comes to me shall not hunger, and whoever believes in me shall never thirst... <sup>66</sup> After this many of his disciples turned back and no longer walked with him. <sup>67</sup> So Jesus said to the twelve, “Do you want to go away as well?” <sup>68</sup> Simon Peter answered him, </p>
          <p  class="participant">“Lord, to whom shall we go? You have the words of eternal life, <sup>69</sup> and we have believed, and have come to know, that you are the Holy One of God.” </p>
          <p class="scripture-ref">- John 6:35, 66-69</p>
        </div>

        <div class="m2-bottom">
          <h3 class="text-center uppercase font-2 m3-top m3-bottom"><span class="font3 p1-right">𝄞</span> The Doxology <span class="font3 p1-left">𝄞</span></h3>
        </div>

        <div class="scripture">
          <p class="leader">They will make war on the Lamb, and the Lamb will conquer them, for he is Lord of lords and King of kings,</p>
          <p class="participant">and those with him are called and chosen and faithful.”</p>
          <p class="scripture-ref">- Revelation 17:14</p>
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
  box-shadow: 0 0 5px #888;
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
  max-width: 5.5in;
}
</style>
