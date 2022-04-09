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

          <div class="scripture m2-top">
            <p class="leader">
              And Jesus came and said to them, “All authority in heaven and on
              earth has been given to me.
            </p>
            <p class="participant">
              Go therefore and make disciples of all nations, baptizing them in
              the name of the Father and of the Son and of the Holy Spirit,
            </p>
            <p class="leader">
              teaching them to observe all that I have commanded you.
            </p>
            <p class="participant">
              And behold, I am with you always, to the end of the age.”
            </p>
            <p class="scripture-ref">- Matthew 28:18-20</p>
          </div>

          <p class="participant m1-top m2-bottom">The LORD is ______</p>

          <p class="leader">
            How then will they call on him?
            <span class="participant">They will believe!</span>
          </p>
          <p class="leader">
            And how are they to believe in him?
            <span class="participant">They will hear!</span>
          </p>
          <p class="leader">
            And how are they to hear?
            <span class="participant">We will preach!</span>
          </p>
          <p class="leader">
            And how are you to preach?
            <span class="participant">We will be sent!</span>
          </p>
          <p class="leader">
            And who will send you? <span class="participant">My God!</span>
          </p>
          <p class="leader">
            “How beautiful are the feet of those who preach the good news!"
            <span class="participant">Aye!</span>
          </p>
        </div>

        <div class="m2-bottom">
          <h3 class="text-center uppercase font-2 m3-top m3-bottom">
            <span class="font3 p1-right">𝄞</span> A Psalm or Spiritual Song for
            Preaching <span class="font3 p1-left">𝄞</span>
          </h3>
        </div>

        <div class="scripture">
          <p class="leader">
            And all who believed were together and had all things in common.
          </p>
          <p class="participant">
            And they were selling their possessions and belongings and
            distributing the proceeds to all, as any had need.
          </p>
          <p class="leader">
            And day by day, attending the temple together and breaking bread in
            their homes,
          </p>
          <p class="participant">
            they received their food with glad and generous hearts,
          </p>
          <p class="leader">
            praising God and having favor with all the people.
          </p>
          <p class="participant">
            And the Lord added to their number day by day those who were being
            saved.
          </p>
          <p class="scripture-ref">- Acts 2:44-47</p>
        </div>

        <div class="m2-bottom">
          <h3 class="text-center uppercase font-2 m3-top m3-bottom">
            <span class="font3 p1-right">𝄞</span> The Doxology
            <span class="font3 p1-left">𝄞</span>
          </h3>
        </div>

        <div class="scripture">
          <p class="leader">
            Some indeed preach Christ from envy and rivalry, but others from
            good will. The latter do it out of love, knowing that I am put here
            for the defense of the gospel. The former proclaim Christ out of
            selfish ambition, not sincerely but thinking to afflict me in my
            imprisonment.
          </p>
          <p class="participant">
            What then? Only that in every way, whether in pretense or in truth,
            Christ is proclaimed, and in that I rejoice.
          </p>
          <p class="scripture-ref">- Philippians 1:15-18</p>
        </div>

        <div class="m2-bottom">
          <h3 class="title-label"><span>Prayer</span></h3>
        </div>

        <p class="leader">
          Let us drink to our King, Jesus! <span class="tertiary2">—drink</span>
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
  name: 'SabbathDinnerEvangelism'
}
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
    @extend .tertiary2;
  }
}
</style>
