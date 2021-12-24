<center>
!!! quote ""
    #<b>__Smart Wearable That Measures Heart Rate   💓, Displays Weather Forecast   ☔, Counts Steps   🚶, and Time & Date   🕑__</b>
</center>

##__So..what is this? 🤔__  
I made a wearable watch that can measure your heart rate, displays weather forecast, measures steps count, and shows time & date. It uses an __ESP32__, __Photodetector__, __Accelerometer__, and an __OLED Display__.

<img src="images/watch.JPG"
     style="display:block;float:none;margin-left:auto;margin-right:auto;width:60%">
<center>
*Yeah, you probably seen this before [here](../GameController/index.md),*  
*but yes it is both a a smart wearable and a game controller*   😎  
*maybe I should make it look like an actual watch*   🤔
</center>  

<img src="images/wearableML.gif"
     style="display:block;float:none;margin-left:auto;margin-right:auto;width:60%">
<center>
*Collecting and training heart beat*  
*data via Gaussian Mixture Training*   🧠
</center>  

<img src="images/wearableNOML.gif"
     style="display:block;float:none;margin-left:auto;margin-right:auto;width:60%">
<center>
*The wearable in action, measuring my heart rate, and*  
*displaying all other features*
</center>  

---  

##__Features   🌟__  
- Measures __live heart rate__ through data collected by __photodetector__. __Digital Signal Processing__ is then applied on this data to be __trained via Gaussian Mixture Training (GMM)__, and validated with __Leave-One-Subject-Out-Validation (LOSOV) method__.
- Measures __steps count__ via applying __Digital Signal Processing__ on __Accelerometer data__.
- Provides __Live Weather Forecast__ and __Time & Date display__, achieved through __OpenWeather Map API__.

---  

<!--##__Official Documentation   📑__  -->
<!--The official documentation is currently hosted on [__GitHub__ :fontawesome-brands-github:](https://github.com/fadli0029/finalproject/tree/main/Project), though I am considering to document it on this project page too. So, stay tuned!-->

<!-----  -->

</br>

<!--<center>-->
<!--__For full, detailed, documentation, consult the project's [__GitHub__ :fontawesome-brands-github:](https://github.com/fadli0029/finalproject/tree/main/Project) Repository__-->
<!--</center>-->

