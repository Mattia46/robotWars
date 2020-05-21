const initGame = ({ gameArea }) => ({
  playSingleMove: (robot, nextAction, rivalPosition) =>
    robot.move({ gameArea, nextAction, rivalPosition }),
  playRobot: (robot, robotMoves) =>
    [...robotMoves].forEach(nextAction =>
      robot.move({ gameArea, nextAction })),
  resultRobot: robot => robot.getCurrentPosition(),
})

module.exports = { initGame }
