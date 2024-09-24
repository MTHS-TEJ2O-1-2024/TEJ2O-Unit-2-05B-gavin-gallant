/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Gavin G
 * Created on: Sep 2024
 * This program shows temp in K
*/

let tempertureC: number
let tempertureK: number

input.onButtonPressed(Button.A, function (){
    tempertureC = input.temperature()
    tempertureK = tempertureC + 273.15
    basic.showString("The temperature is:" + tempertureK)
})
