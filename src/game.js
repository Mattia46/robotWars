const initGame = ({ gameArea }) => ({
  playRobot: (robot, robotMoves) =>
    [...robotMoves].forEach(nextAction =>
      robot.move({ gameArea, nextAction })),
  resultRobot: robot => robot.getCurrentPosition(),
})

module.exports = { initGame }
