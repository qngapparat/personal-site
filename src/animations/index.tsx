import posed from 'react-pose'

const Modal = posed.div({
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 250
    }

  },
  exit: {
    opacity: 0,
    scale: 0.92,

  }
})


const Paragraph = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 400,
      delay: 300
    }
  },
  exit: {
    x: 40,
    opacity: 0,
    transition: {
      duration: 200,
    }
  }
})

export { Modal, Paragraph }