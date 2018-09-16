<template>
  <div class="romans theme-back pad">
    <div class="flex-row">
      <h1 class="flex-one marginb">Romans</h1>
      <a @click="$router.push('/')">Home</a>
    </div>

    <div
      :class="sessionClasses(1)"
      data-session="1"
      class="theme-mid pad rounded shadow marginb"
      @click="setSession(1)">
      <h2>SESSION 1 <span class="muted">Romans 4-6</span></h2>
      <p>Overview &amp; Context</p>
      <div class="detail hi-top">
        <div>
          <p><strong>Old Testament references</strong></p>
          <p class="marginb">Read the following passages, they will help provide important context to the things that Paul will discuss in Romans 4-6.</p>
          <p>Abram's faith counted as righteousness <span class="callout alt">Genesis 15:1-6</span></p>
          <p>Abraham, father of many nations, given the sign of circumcission <span class="callout alt">17:1-11</span></p>
          <p>David speaks of the forgiveness of sin <span class="callout alt">Psalm 32:1-2</span></p>
          <p>The promise of death in response to disobedience <span class="callout alt">Genesis 2:15-18</span></p>
          <p>The fall of man <span class="callout alt">Genesis 3:1-6</span></p>
          <p>The sin of humans resulting in death <span class="callout alt">Genesis6:5-8</span></p>
          <p>The giving of the law <span class="callout alt">Exodus 24:12; Exodus 28:33-35</span></p>
          <p>At the right time - The betrayal and death of Christ <span class="callout alt">John 18:3-11, Mark 15:34-39</span></p>
          <br >
          <p>Now, read Romans 4-6</p>
        </div>
      </div>
    </div>

    <div
      :class="sessionClasses(2)"
      data-session="2"
      class="theme-mid pad rounded shadow marginb"
      @click="setSession(2)">
      <h2>SESSION 2 <span class="muted">Romans 4</span></h2>
      <p>Observe</p>
      <div class="detail margint hi-top">
        <p>• What do we learn about Abraham?</p>
        <p>• What do we learn about God?</p>
        <p>• What are the repeated words? What is the definition of these words?</p>
        <p>• How many times is the word 'but' used? Do you see any patterns in how it is used?</p>
      </div>
    </div>

    <div
      :class="sessionClasses(3)"
      data-session="3"
      class="theme-mid pad rounded shadow marginb"
      @click="setSession(3)">
      <h2>SESSION 3 <span class="muted">Romans 4</span></h2>
      <p>Interpret &amp; Apply</p>
      <div class="detail margint hi-top">
        <p><strong>Interpret</strong></p>
        <p>• What is true about the one who has faith?</p>
        <p>• What is true about works, the Law and those who live by these?</p>
        <p>• From verse 2, if Abraham were justified by works, why would he still not be able to boast before God?</p>
        <p class="margint"><strong>Apply</strong></p>
        <p>• SPACE: As you consider this passage, are there any:</p>
        <div class="marginl">
          <p><strong>S</strong>ins you need to confess?</p>
          <p><strong>P</strong>romises you can claim?</p>
          <p><strong>A</strong>ctions you can take?</p>
          <p><strong>C</strong>ommands you need to obey?</p>
          <p><strong>E</strong>xamples you can follow?</p>
        </div>
      </div>
    </div>

    <div
      :class="sessionClasses(4)"
      data-session="4"
      class="theme-mid pad rounded shadow marginb"
      @click="setSession(4)">
      <h2>SESSION 4 <span class="muted">Romans 5:1-11</span></h2>
      <p>Observe, Interpret, Apply</p>
      <div class="detail margint hi-top">
        <p>Observe: What are the action words in this passage? Who/what is the actor? What is the result?</p>
        <p>Interpret: What are the most important words? What do they mean? How are they used?</p>
        <p>Apply: What from this passage can you be thankful for? How can this thankfulness change your experience of today?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Romans',
  data () {
    return {
      visibleSession: 0
    }
  },
  methods: {
    sessionClasses (session) {
      return this.visibleSession === session ? ['active'] : []
    },
    setSession (session) {
      this.visibleSession = session
    }
  }
}
</script>

<style lang="less" scoped>
.romans {
  .callout.alt {
    font-weight: bold;
  }
}
.detail {
  max-height: 0px;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s, opacity 0.5s;
}
.active {
  .detail {
    padding-top: 10px;
    margin-top: 10px;
    max-height: 3000px;
    opacity: 1;
  }
}
</style>
