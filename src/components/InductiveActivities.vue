<template>
  <div class="inductive-activities flex-column">
    <div class="">
      <div class="content flex-row align-center">
        <a class="alt rounded tertiary p1 m2-left" @click="$router.push('/')"><i class="fas fa-home"></i></a>
        <h1 class="font4 border-bottom-tertiary white p2">Inductive Activities</h1>
      </div>
    </div>

    <div class="content flex-one flex-column scrolly">
      <div class="activities-nav m1-top">
        <ul class="flex-row activity-categories text-center uppercase white">
          <li class="flex-one category-tab" :class="{'active-tab': category === 'observe'}" @click="category = 'observe'">Observe</li>
          <li class="flex-one category-tab" :class="{'active-tab': category === 'interpret'}" @click="category = 'interpret'">Interpret</li>
          <li class="flex-one category-tab" :class="{'active-tab': category === 'apply'}" @click="category = 'apply'">Apply</li>
        </ul>
      </div>

      <div class="flex-one flex-row p2">
        <div class="m1-right">
          <transition name="fade">
            <div v-if="category === 'observe'" class="flex-column">
              <p v-for="(title, i) in observeTitles" :key="i" @click="show(title)" class="activity-tab" :class="{active: activeTitle === title}">{{title}}</p>
            </div>
          </transition>
          <transition name="fade">
            <div v-if="category === 'interpret'" class="flex-column">
              <p v-for="(title, i) in interpretTitles" :key="i" @click="show(title)" class="activity-tab" :class="{active: activeTitle === title}">{{title}}</p>
            </div>
          </transition>
          <transition name="fade">
            <div v-if="category === 'apply'" class="flex-column">
              <p v-for="(title, i) in applyTitles" :key="i" @click="show(title)" class="activity-tab" :class="{active: activeTitle === title}">{{title}}</p>
            </div>
          </transition>
        </div>

        <!-- <div class="flex-one">
        </div> -->
        <!-- OBSERVE -->
        <div class="activity shadow bg-base p3">
          <div class="activity-title">People, Places, Things</div> These are the building blocks of the text, can you find them all?
          The goal of this activity is to become familiar with the text by reading it slowly and intentionally calling out the people, places and things (or for grammar fans, the nouns). Take note of pronouns (he, she, I, etc) that refer back to the same person.
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Cause &amp; Effect</div> What is described as happening and what does the text say is the result?
          Explicit cause and effect is the easiest to identify - someone did this, and as a result this happened or that is true. However, be observant of more intricate forms of cause and effect, such as when a single cause has multiple effects or when multiple causes contribute to a single effect. Also, watch for delayed resolution of a cause &amp; effect pairing, such as is often the case in one of Paul’s letters he expands on an idea before concluding his thought. Further, you may encounter passages which contain heavily implied effects or causes which are too obvious to be considered an interpretation of the text; in this case take note of the fact that the pairing you observe is not explicit and consider to what degree they are implied.
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Persons</div> Who are the main persons in the text and what is said about them?
          In an epistle, the main persons will almost always include: God, the inspired author, and the audience of the letter. There may also be other persons with significant mention in the text; if so, you may include them in this exercise. List what you learn about each of these persons. As with all observation activities, try your best not to draw conclusions about the persons that are not explicitly stated in the text itself.
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Adjectives</div> What are the describing words, and what are they describing?
          Find all of the adjectives or descriptive phrases in the text and identify who or what they are describing.
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Actions</div> What is happening? Who is doing this? Who or what is it being done to? What is the result?
          Find all of the verbs so that you gain an understanding of the movement, progression and occurences of the text. Optionally spend some extra time paying close attention to who or what is the actor of the verb, who or what is the target of the action, the tense or timing of the action, and any direct effects of the action.
        </div>

        <!-- INTERPRET -->
        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Phrasing</div> How is this passage structured in terms of sentences, phrases, lists, asides and references?
          Put each phrase on a new line. It may help by starting with sentences, commas and other punctuation that marks a break in thought. The goal of this activity is to understand the flow of thought in the text and to help identify complex referencing of ideas. For example, in the sentence, “I came to you to bless you for the ongoing health of you faithful ministry, delivering to you the gift of love,” it may not be immediately clear that both ‘to bless you’ and ‘delivering to you the gift’ are referring back to ‘I came to you to’. As you move each phrase to it’s own line, experiment with indenting these lines to signal the word or phrase it is referring back to.
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Groups</div> How can things be grouped together in this passage?
          The goal of this activity is to find repeated words, ideas and relationships. As you read the passage, place each word into a group, either a new group by itself, or into a group formed from previous words which are linked or related in some way. It is ok to keep short phrases such as “led astray” or “hated by others” together. You may also place words/phrases into multiple groups.
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Topics</div> What are the topics and ideas discussed in this passage?
          This activity is about identifying what is important in the passage and what topics this passage is adequately speaking to. It may be helpful to pretend you are building a Bible index that someone might use in order to find Scripture that relates to an arbitrary subject they have questions about. These topics may be derived from important words in the text, or they may be other words that capture the essence of an important phrase or idea reflected in the text. Topics are best if they are a single word, however, using a few words for a topic is allowed.
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Interrogation</div> Ask every question you can think of pertaining to the text.
          The goal of this activity is to acknowledge uncertainty you may have about the meaning, context or facts of the text. For example, you may ask ‘who was Artemas?’, ‘why was Paul at Nicopolis?’, ‘where was Nicopolis?’, and so on. This activity should help you think about and notice details that you may have otherwise overlooked. If you do this activity correctly it should become more an act of meditation than of interrogation, especially as you ask questions like, ‘what are cases of urgent need?’. Also, this interrogation is not for the purpose of trying to find deficiencies in the text itself, there are none, it is what God intended it to be; the goal is to uncover deficiencies in your understanding of what is being said or your knowledge of what God intends for us from this text.
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Outline</div> What are the main sections of the text? Give each section a title. Optionally add sub-points to each section title that capture the main ideas for that section.
          You can identify a new section by changes in who/what the text is describing, the use of transition words (for, but, this, because, etc.), or a change in the author’s tone. Think of your section titles as news headlines, short headings that capture the essential message of the text. This activity is meant to help give you “mental hooks” on which to hang the full content of the passage. Feel free to argue with yourself over the location of a new section, doing so may help you think more deeply about what God is actually saying in the text!
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Paraphrase</div> Retell the content of the passage in your own words by summarizing as much as possible and using as simple language as you can manage.
          Try to remove any repetition of ideas and replace them with a single statement. Use words that a 7 year old would understand. Try to emphasize only the main ideas. This activity will help you identify the flow of thought and force you to think about what is really important, as well as what is generally being said (as opposed to getting distracted by a certain word or confusing phrase).
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Anti-meaning: Adjectives</div> Replace the adjectives in the text with words of the opposite meaning. How does this help clarify what God is actually saying in the passage?
          Experiment with qualitative and quantitative changes of the text. A qualitative change would be to replace words like ‘good’ with ‘bad’ or ‘kindly’ with ‘cruelly’. A quantitative change affects the amount or scope of what's being described, such as replacing ‘all’ with ‘some’ or ‘everywhere’ with ‘at home’. The point of both approaches is to force you to think more clearly about what is actually being said.
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Anti-meaning: Inverse Positivity</div> Replace positive words or phrases with a corresponding negative word or phrase and, vice versa, negative with positive.
          Often what is being said becomes more clear when you think about what is not being said. For example, “He used cruel words to make me feel small” may be the inverse of “He used loving words to encourage me”. Once you have finished inverting the meaning consider if you can identify other Scripture passages that support or state the inverse; it is important to realize that just because it may be the opposite of what is said, it may still be untrue!
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Anti-meaning: Soften &amp; Sharpen</div> Replace strong words with weaker words and weak words with stronger words. How does this affect the meaning?
          It can be easy to skim over words without fully appreciating the intensity or delicacy with which they are used. Paying attention to this can aid in determining the importance of what is being said, and in distinguishing major ideas from minor points.
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Importance</div> What are the important words in this passage? Identify 5-10 of the most important words in the text and rank them in order of importance. Why are they important?
          This activity is concerned with identifying the words that are important from the perspective of God’s meaning, not merely what stands out to you at this particular time. What words offer the most meaning, clarity, and direction to what is being said. Once you have identified these words, ask questions like these for the top 3: how does this word impact the meaning of the text? What if this word were changed or removed? How else is this word used in the Bible? How might cultural uses of this word affect how this passage is interpreted?
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Related Scripture</div> What other passages talk about similar themes and ideas?
          List the passages and in what ways they are similar.
        </div>

        <!-- APPLY -->
        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Church</div> What implications does this passage have for you as a church member, for your fellow church family, for the church in your city/region?
          What would it look like for you to be a living example of this text in your church? To what degree are you this example now?
          To what degree is your church an example of this passage now? What would it look like for the members of the church you belong to to be a living example of this text?
          How would it affect your city if churches there were living examples of this text? To what degree are they this example now?
          Pray. Concerning numerals II and III above, (a) thank God for any ways the church is a godly example. (b) Ask God for His power of regeneration in the areas the church is not the example it should be. (c) Ask God to show you how He would have you contribute to the continuance of a godly example and (d) to the solution for any deficient example.
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Stewardship</div> What implications does this passage have on how you steward your time, money, thoughts and relationships?
          Set the context for this activity by answering the following questions: In the next 3 days…
          … What will you spend time doing?
          … For what will you spend money?
          … What attitudes and ideas will you think about?
          … Who will you see and interact with?
          Now read the passage again. Finally, answer: How should this passage affect...
          … the way you spend your time?
          … the way you spend your money?
          … the things you feel and think?
          … the way you interact with people?
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">SPACE</div> As you read the passage, what does Spirit reveal in the following areas:
          <br> • Sin I need to confess
          <br> • Promises I can claim
          <br> • Action I need to take
          <br> • Commands I must obey
          <br> • Examples I can follow
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">ACTS</div> This is an acronym and is primarily an activity of prayer. Consider the primer questions for each word in the acronym, then direct your thoughts toward God in prayer:
          <div class="activity-title">Adoration</div> what does this passage teach about God’s character or attributes? Praise God for these qualities.
          <div class="activity-title">Confession</div> what specific or general sinfulness does Spirit reveal in your life through this passage? Confess this to God, accept His forgiveness and power to change.
          <div class="activity-title">Thankfulness</div> how does this passage reveal things you can be thankful for? Thank God for these things.
          <div class="activity-title">Supplication</div> how are you or someone you know in need? Ask God to supply His deliverance in these things.
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Outward-Inward</div>
          <div>
            This activity is meant to help you think honestly about differences in who you are to others, in your habits, in your values and in your inner self.
            <br>
            Observe the different character qualities in the text. For each question below, you are being measured in 2 ways:
            <br>
            (1) to what degree you are an example of each character quality, and
            <br>
            (2) to what degree you are relying on yourself versus relying on Spirit for this character quality.
            <br>
            <br>
            If your family were to compare you to these qualities, how would they measure you? Your co-workers, neighbors, etc.?
            <br>
            • How would you measure your actual habits and behaviors compared to these qualities?
            <br>
            • How would you measure your values and beliefs compared to these qualities?
            <br>
            • How would you measure your actual thoughts and desires compared to these qualities?
          </div>
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">I am &amp; I am not</div> What is happening in this text? What is commanded or modeled? How are you doing these things? How are you not doing these things? What is Jesus making you in regards to these things?
          When thinking about this passage, and being honest with myself:
          I am… (being unfruitful by…)
          I am not… (being unfruitful by…)
          Jesus is doing this in my life… (helping me to be fruitful by…)
        </div>

        <div class="activity shadow rounded bg-base p3">
          <div class="activity-title">Will, Intellect &amp; Fantasy</div> To what degree have the truths in this passage settled in to who you are? Are you living in obedience to these truths? Are you only intellectually agreeing with these truths but not obeying? Or are you aware of these teachings but not personally agreeing to them?
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InductiveActivities',
  data () {
    return {
      category: undefined,
      activeTitle: undefined,
      observeTitles: [
        'People, Places, Things',
        'Cause & Effect',
        'Persons',
        'Adjectives',
        'Actions'
      ],
      interpretTitles: [
        'Phrasing',
        'Groups',
        'Topics',
        'Interrogation',
        'Outline',
        'Paraphrase',
        'Anti-meaning: Adjectives',
        'Anti-meaning: Inverse Positivity',
        'Anti-meaning: Soften & Sharpen',
        'Importance',
        'Related Scripture'
      ],
      applyTitles: [
        'Church',
        'Stewardship',
        'SPACE',
        'ACTS',
        'Outward-Inward',
        'I am & I am not',
        'Will, Intellect & Fantasy'
      ]
    }
  },
  watch: {
    category () {
      switch (this.category) {
        case 'observe': this.show(this.observeTitles[0])
          break
        case 'interpret': this.show(this.interpretTitles[0])
          break
        case 'apply': this.show(this.applyTitles[0])
          break
      }
    }
  },
  methods: {
    show (title) {
      this.activeTitle = title
      const shownActivity = this.$el.querySelector('.activity.show')
      if (shownActivity) {
        shownActivity.classList.remove('show')
      }
      const activity = [...this.$el.querySelectorAll('.activity-title')].find(n => n.textContent === title)
      activity.parentElement.classList.add('show')
    }
  },
  mounted () {
    this.category = 'observe'
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/app";

.inductive-activities {
  h2 {
    margin-top: 25px;
    margin-bottom: 15px;
  }
  .category-tab {
    @extend .p2;
    @extend .border-right-secondary;
    @extend .border-bottom-secondary;
    &.active-tab {
      @extend .bg-secondary;
    }
  }
  .activity-tab {
    @extend .p1;
    @extend .border-bottom-primary;
    @extend .tertiary2;
    @extend .pointer;
    &.active {
      @extend .white;
    }
  }
  .activity {
    @extend .fade-in;
    margin-bottom: 1px;
    display: none;
    line-height: 1.4;
    overflow-y: auto;
    &.show {
      display: block;
    }
  }
  .activity-title {
    @extend .primary;
    font-weight: bold;
    margin-bottom: 8px;
  }
}
.white {
  color: white;
}
.fade-in {
  animation-name: fade-in;
  animation-fill-mode: forwards;
  animation-duration: 0.7s;
}
@keyframes fade-in {
  0% {
    color: rgba(0,0,0,0);
  }
  100% {
    opacity: 1;
  }
}
</style>
