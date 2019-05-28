; (function (Vue) {

  const vm = new Vue({
    el: '#app',
    data() {
      return {
        step: 0,
        sections: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    computed: {
      status() {
        return [
          this.sections[0] + this.sections[1] + this.sections[2],
          this.sections[3] + this.sections[4] + this.sections[5],
          this.sections[6] + this.sections[7] + this.sections[8],
          this.sections[0] + this.sections[3] + this.sections[6],
          this.sections[1] + this.sections[4] + this.sections[7],
          this.sections[2] + this.sections[5] + this.sections[8],
          this.sections[0] + this.sections[4] + this.sections[8],
          this.sections[2] + this.sections[4] + this.sections[6],
        ]
      },
      winner() {
        let winner = null

        if (this.step >= 4) {
          winner = this.status.find((count) => {

            return count === 3 || count === 30

          }) || null
          if (winner === 3) {
            winner = 'Circle'
          } else if (winner === 30) {
            winner = 'Cross'
          } else if (winner === null && this.step > 8) {
            winner = 'Nobody'
          }
        }

        return winner

      }
    },
    methods: {
      test(e) {
        console.log(e)
      },
      clickHandler(index) {
        if (this.sections[index] === 0) {
          // this.sections[index] = this.step % 2 === 0 ? 1 : 10
          this.$set(this.sections, index, this.step % 2 === 0 ? 1 : 10)
          this.step++
          this.forceRender()
        }
      },
      resetHandler() {
        this.sections = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.step = 0
      },
      forceRender() {
        let temp = [...this.sections]
        this.sections = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.$nextTick(() => {
          this.sections = temp
        })
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.test(2131)
      })
    }


  })

})(Vue)