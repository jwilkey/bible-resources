<template>
  <div class="sabbath-dinner p3">
    <div class="card">
      <h1 class="m2-bottom p2-bottom border-bottom-tertiary">Sabbath Dinner</h1>

      <div class="m2-bottom">
        <h3 class="primary">The Bell</h3>
      </div>

      <div class="m2-bottom">
        <h3 class="primary">Greetings</h3>
        <p class="leader">name</p>
        <p>Here I am</p>
        <p class="leader">The LORD our God, the LORD is one. You shall love the LORD your God with all your (heart | soul | might)</p>
        <p>The LORD is ______</p>
      </div>

      <div class="scripture">
        <p><span class="leader">In the beginning</span>, God created the heavens and the earth.</p>
        <p class="text-right tertiary">- Genesis 1:1</p>
      </div>

      <div class="m2-bottom">
        <h3 class="primary"> A Psalm or Spiritual Song of Praise </h3>
      </div>

      <div class="scripture">
        <p><span class="leader">|35| Jesus said to them, “I am the bread of life; whoever comes to me shall not hunger, and whoever believes in me shall never thirst... |66| After this many of his disciples turned back and no longer walked with him. |67| So Jesus said to the twelve, “Do you want to go away as well?” |68| Simon Peter answered him, </span>“Lord, to whom shall we go? You have the words of eternal life, |69| and we have believed, and have come to know, that you are the Holy One of God.” </p>
        <p class="text-right tertiary">- John 6:35, 66-69</p>
      </div>

      <div class="m2-bottom">
        <h3 class="primary">The Doxology</h3>
      </div>

      <div class="scripture">
        <p><span class="leader">They will make war on the Lamb, and the Lamb will conquer them, for he is Lord of lords and King of kings,</span> and those with him are called and chosen and faithful.”</p>
        <p class="text-right tertiary">- Genesis 1:1</p>
      </div>

      <div class="m2-bottom">
        <h3 class="primary">Sabbath Prayer</h3>
      </div>

      <div class="leader">Let us drink to our King, Jesus!</div>
      <div class="tertiary">---drink---</div>
      <div class="leader">Let us eat, receiving this blessing from our King!</div>
      <div class="tertiary">---eat---</div>
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
  line-height: 140%;
}
.leader {
  font-weight: bold;
  font-style: italic;
}
.scripture {
  @extend .bg-tertiary3;
  @extend .p2;
  @extend .rounded;
  @extend .m2-bottom;
}
</style>
