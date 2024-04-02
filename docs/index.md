---
hide:
  - navigation
  - toc
---

<center>
<img src="https://ghchart.rshah.org/ff6e42/fadli0029" alt="2016rshah's Blue Github Chart" />
    [Linked:fontawesome-brands-linkedin:](https://www.linkedin.com/in/mfarsani/){ .md-button .md-button--primary }  [GitHub :fontawesome-brands-github:](https://github.com/fadli0029){ .md-button .md-button--primary }  [Resume](RESUME_V25.pdf){ .md-button .md-button--primary }
</center>

</br>

<center>
# __Experiences__ 💼
<table>
    <tr>
        <td>
        <center>
            <h1>Moss Robotics Inc.</h1>
            <h3>Autonomous Driving Perception Software Engineer Intern</h3>
            <b>July 2023 - September 2023</b><br/>
        </center>
        <div class="image-row">
            <img src="images/moss_internship.gif" alt="Object Detection" class="exp-gifs">
        </div>
            I worked as a software engineer intern working on the robot's perception system for autonomous driving.
            <ul>
                <li>Overcome limitations of single-scan LiDAR data by implementing a <b>point cloud accumulator</b> module</li>
                <li>Improved detection output and enabled <b>real-time tracking</b> by developing a <b>multi-sensor fusion</b> module.</li>
                <li>Automated tree/pot counting and tree block identification by introducing a <b>graph-based</b> approach.</li>
                <li>Improved <b>tree detection</b> and <b>row-following</b> accuracy with density-based clustering and parallel line fitting.</li>
                <li>Enabled zero-intervention row-to-row navigation by building an <b>exit detection algorithm</b>.</li>
                <li>Enhanced real-time performance by enabling <b>multi-threaded, thread-safe</b> perception stack components.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
        <center>
            <h1>Existential Robotics Lab at Contextual Robotics Institute UC San Diego</h1>
            <h3>Research Software Engineer</h3>
            <b>January 2023 - current</b><br/>
        </center>
        <div class="image-row">
            <img src="images/pyrc3d_demo_astar.gif" alt="PyRC3D" class="exp-gifs">
        </div>
            Working on open-source implementations and 3D visualizations of baseline robotics algorithms for localization, mapping, and controls using PyBullet real-time physics simulation. This research project is under <a href="https://natanaso.github.io/">Professor Nikolay Atanasov</a>.
            <ul>
                <li>Built implementations & visualizations of baseline <b>robotics algorithms</b> for <b>localization, mapping, & controls</b>.</li>
                <li>Implemented various robotics algorithms like <b>Particle Filter, SLAM, Kalman Filter, A* search</b>, etc.</li>
                <li>Programmed the <b>navigation environment</b> in <b>PyBullet real-time physics simulation engine</b>.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
        <center>
            <h1>Autonomy Lab at Contextual Robotics Institute UC San Diego</h1>
            <h3>Research & Software Engineer Intern</h3>
            <b>March 2022 - September 2022</b><br/>
        </center>
        <div class="image-row">
            <img src="images/exp_quadruped.gif" alt="Quadruped robot" class="exp-gifs">
        </div>
            I worked as a software engineering intern and an undergraduate research intern for a Research Project at a Robotics Lab in the Jacobs School of Engineering at UC San Diego. The research was on Vision-Guided Quadrupedal Locomotion under <a href="https://xiaolonw.github.io/">Professor Xiaolong Wang</a> group.
            <ul>
                <li>Trained a <b>Reinforcement Learning policy</b> on the <b>Unitree A1</b> robot allowing it to traverse challenging terrains.</li>
                <li>Collected <b>real-world data</b> to bridge the gap between <b>Sim2Real</b> and uncertainties in the real world.</li>
                <li>Used <b>GPU clusters</b> and other MLOps tools like <b>Kubernetes</b> and <b>WANDB</b> to train the models.</li>
                <li>Modified our terrains in the <b>NVIDIA Isaac Gym</b>, allowing the robot to adapt to more challenging terrains.</li>
                <li>Implemented Xbox controller python script that controls the Unitree A1 robot.</li>
            </ul>
        </td>
    </tr>
</table>

</br>

---

<center>
# __Projects__ 🛠
<table>
<tr>
  <td>
  <center>
    <h1>Robust Orientation Tracking for Panoramic Stitching: Projected Gradient Descent vs. Extended Kalman Filters</h1>
  </center>
    <div class="image-row">
      <img src="images/pgd_dataset3.gif"   class="orientation-tracking-gifs">
      <img src="images/ekf4_dataset3.gif"  class="orientation-tracking-gifs">
      <img src="images/ekf7_dataset3.gif"  class="orientation-tracking-gifs">
      <img src="images/vicon_dataset3.gif" class="orientation-tracking-gifs">
    </div>
    <br/>
    <b>Abstract</b><br/>
    The quest for precise 3D orientation tracking of
    rotating bodies underpins advancements in robotics, augmented
    reality, and navigational systems, necessitating methodologies
    that balance accuracy with computational feasibility. This paper
    introduces a projected gradient descent (PGD) methodology,
    innovatively applied to orientation estimation through sensor
    fusion from a 6-DOF inertial measurement unit (IMU). We
    undertake a comparative analysis of PGD against established
    Extended Kalman Filter (EKF) methods—specifically, 4-state and
    7-state variants—anchored by ground truth data from a VICON
    motion capture system. Our investigation reveals PGD’s superior
    accuracy and robustness over EKF approaches across a spectrum of datasets
    characterized by noise, discontinuities, and dynamic changes.
    Despite PGD’s reliance on future data, which poses a challenge
    for real-time application, its performance advantage is notable,
    especially in complex environments. The 7-state EKF, while
    outperforming PGD in scenarios with frequent discontinuities,
    exhibits limitations in smoothness, highlighting a trade-off
    between responsiveness and continuity. The practical utility of
    these orientation estimation methods is further demonstrated
    through the application of panoramic image stitching, where
    PGD’s enhanced performance is evident, although EKF models
    provide comparable outcomes under less variable conditions.
    This study underscores PGD’s potential as a robust alternative
    for 3D orientation tracking, offering insights into its com-
    parative performance against traditional EKFs. By delineating
    the strengths and limitations of PGD and EKF methodologies,
    this work contributes to the broader discourse on advancing
    sensor-based orientation estimation, encouraging future efforts
to optimize PGD for real-time applications.
  </td>
</tr>
</table>
<table>
  <tr>
    <td> <img src="Projects/AutonomousRCCar/images/corneringros.gif" width="400" height"400">
    <b><center><a href="Projects/AutonomousRCCar/">SELF-DRIVING RC CAR  🚗</a></center></b>
    <center>An RC Car, powered by Jetson Nano and a custom ROS package, capable of driving autnomously, keeping itself on track and change lanes when needed.</center>
    </br>
    <b><center><a href="Projects/AutonomousRCCar/">👉 Read More</a></center></b>
    </td>
    <td> <img src="Projects/GameController/images/spaceinvader.gif" width="400" height"400">
    <b><center><a href="Projects/GameController/">GAME CONTROLLER  🎮</a></center></b>
    <center>A game controller made with ESP32, accelerometer, OLED display, and more. It's capable of playing both Space Invader and Mine Sweeper game.          </center>
    </br>
    <b><center><a href="Projects/GameController/">👉 Read More</a></center></b>
    </td>
    <td> <img src="Projects/SmartWearable/images/wearableNOML.gif" width="400" height"400">
    <b><center><a href="Projects/SmartWearable/">SMART WEARABLE  ⌚</a></center></b>
    <center>This wearable has multiple features, such as measuring heart rate and steps count, retrieving real-time weather forecast, and showing time & date.   </center>
    </br>
    <b><center><a href="Projects/SmartWearable/">👉 Read More</a></center></b>
    </td>
  </tr>
</table>
</center>

</br>

---

<center>
### __Navigating in this website  🗺__

* __`Blog`__ - Where I will post (well hopefully) tech-related stuffs like guides, academics, etc.
* __`Notes`__ - Hopefully no more writing on papers. You can use my notes freely, and I hope they're useful!
* __`Projects`__ - Seriously, take a look at them.
* Press ++slash++ key to search for anything and everything in the __entire__ website.
</center>
