<h1>Mario Kart.js Challenge</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objective:</b>
                <p>Mario Kart is a racing game series developed and published by Nintendo. Our challenge will be to create logic for a video game to simulate Mario Kart races, considering the rules and mechanics below.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 4</p>
                <p>Driving: 3</p>
                <p>Power: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 3</p>
                <p>Driving: 4</p>
                <p>Power: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 2</p>
                <p>Driving: 4</p>
                <p>Power: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 5</p>
                <p>Driving: 2</p>
                <p>Power: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 3</p>
                <p>Driving: 4</p>
                <p>Power: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 2</p>
                <p>Driving: 2</p>
                <p>Power: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Rules & mechanics:</h3>

<b>Players:</b>


<li><label for="jogadores-item">The computer should receive two characters, which are JavaScript objects, to compete in the race.</label></li>

<b>Tracks:</b>

<ul>
  <li><label for="pistas-1-item">The characters will race on a random track for 5 rounds</label></li>
  <li><label for="pistas-2-item">Each round, a track block will be drawn, which can be a straight, curve, or showdown.</label>
    <ul>
      <li><label for="pistas-2-1-item">If the track block is a STRAIGHT, the player must roll a six-sided die and add their SPEED attribute; whoever wins gains a point.</label></li>
      <li><label for="pistas-2-2-item">If the track block is a CURVE, the player must roll a six-sided die and add their HANDLING attribute; whoever wins gains a point.</label></li>
      <li><label for="pistas-2-3-item">If the track block is a SHOWDOWN, the player must roll a six-sided die and add their POWER attribute; whoever loses loses a point</label></li>
      <li><label for="pistas-2-3-item">No player can have a negative score (values below 0)</label></li>
    </ul>
  </li>
</ul>

<b>Victory Condition:</b>


<li><label for="vitoria-item">At the end, the player with the most points wins.</label></li>