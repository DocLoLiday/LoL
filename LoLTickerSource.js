/*******************************************************************************
*
*   'Kai_Ticker.js', 
*
*   Global settings for Kai Ticker
*
*
*      Skreens Entertainment Technologies, Incorporated                                          
*      __________________________________
*
*     [2014-2015] Skreens Entertainment Incorporated
*     All Rights Reserved
*
*  NOTICE: All information contained herein is, and remains and the property of Skreens
*  Entertainment Technologies Incorporated and its suppliers, if any.  The intellectual and technical concepts 
*  contained herein are proprietary to Skreens Entertainment Technologies incorporated and its 
*  suppliers and may be covered by U.S. and Foreign Patents and Patents in process, and
* are protected by trade secret or copyright law.  Dissemination of this information or
* reproduction of this material is strictly forbidden unless prior written permission is obtained
* from Skreens Entertainment Technologies Incorporated.
*******************************************************************************/

       
// group: is the groups of elements in the ticker
// element: is the number of the element in a group ** element 0 is special to show alertArea the right side of the ticker that is the skreens hold off area
//      image: is the image in a element (or NONE) ** if there is an image but not text then the image is the size of the full element
//      text: is the text in an element (or NONE) ** if there is text then the image is to be small center left of the element
//      skreensCommand: is the url action when activiated (or NONE)(commands will grow but first couple POPUP and LAYOUT <name> are first two)
//          url: url for the popup in skreens
//          pos: x,y location of skreen
//          size: height, width of skreen

var scrollTimePerElement = 2    //number of seconds between scrolling one element

var lolChampions = [ 
            { element:0, image:"images/Kayle.jpg", mobaURL:"http://www.mobafire.com/league-of-legends/build/kayle-jungle-the-judicator-updated-for-s5-400946", embedCode: '<iframe src="//www.youtube.com/embed/kn-Y6jawdHM?loop=1&autoplay=1&playlist=kn-Y6jawdHM" frameborder="0" allowfullscreen></iframe>', posX:0, posY:0, height:146, width:274 },
            { element:1, image:"images/Vi.jpg", mobaURL:"http://www.mobafire.com/league-of-legends/build/lets-punch-jungle-top-updated-for-s5-379541", embedCode: '<iframe src="//www.youtube.com/embed/vp3ZrRJz-ZY?loop=1&autoplay=1&playlist=vp3ZrRJz-ZY" frameborder="0" allowfullscreen></iframe>', posX:0, posY:0, height:146, width:274 },
            { element:2, image:"images/Fiddlesticks.jpg", mobaURL:"http://www.mobafire.com/league-of-legends/build/season-5-bird-brain-fiddle-jungle-404200", embedCode: '<iframe src="//www.youtube.com/embed/uc_-ms5ADhk?loop=1&autoplay=1&playlist=uc_-ms5ADhk" frameborder="0" allowfullscreen></iframe>', posX:0, posY:0, height:146, width:274 },
            { element:3, image:"images/Pantheon.jpg", mobaURL:"http://www.mobafire.com/league-of-legends/build/pantheon-the-artisan-of-the-jungle-pres5-ready-329600", embedCode: '<iframe src="//www.youtube.com/embed/h2yjpxzTNvs?loop=1&autoplay=1&playlist=h2yjpxzTNvs" frameborder="0" allowfullscreen></iframe>', posX:0, posY:0, height:146, width:274 },
            { element:4, image:"images/Ahri.jpg", mobaURL:"http://www.mobafire.com/league-of-legends/build/temptations-of-the-fox-405434", embedCode: '<iframe src="//www.youtube.com/embed/hlalkAUkwqE?loop=1&autoplay=1&playlist=hlalkAUkwqE" frameborder="0" allowfullscreen></iframe>', posX:0, posY:0, height:146, width:274 },
            { element:5, image:"images/Jinx.jpg", mobaURL:"http://www.mobafire.com/league-of-legends/build/overly-attached-jinx-jinxstream-op-hidan-351216", embedCode: '<iframe src="//www.youtube.com/embed/KN3OYwP8nHE?loop=1&autoplay=1&playlist=KN3OYwP8nHE" frameborder="0" allowfullscreen></iframe>', posX:0, posY:0, height:146, width:274 },
            { element:6, image:"images/Leona.jpg", mobaURL:"http://www.mobafire.com/league-of-legends/build/s5-leona-support-time-to-shine-370345", embedCode: '<iframe src="//www.youtube.com/embed/oViu5Pv_wwY?loop=1&autoplay=1&playlist=oViu5Pv_wwY" frameborder="0" allowfullscreen></iframe>', posX:0, posY:0, height:146, width:274 },
            { element:7, image:"images/Jax.jpg", mobaURL:"http://www.mobafire.com/league-of-legends/build/4-21-lighting-up-the-jungle-with-his-big-lampost-plat-5-314882", embedCode: '<iframe src="//www.youtube.com/embed/B18qApcVCRg?loop=1&autoplay=1&playlist=B18qApcVCRg" frameborder="0" allowfullscreen></iframe>', posX:0, posY:0, height:146, width:274 },

];