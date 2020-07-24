// domReady option 2
function playMusic() {
  const backgroundMusic = document.createElement('audio');
  backgroundMusic.src = "https://youtu.be/sQB3p53kKio";
  backgroundMusic.currentTime = 0;
  backgroundMusic.play();
  backgroundMusic.autoplay = true;
  backgroundMusic.loop = true;
}
//===========================
//**** START BUTTON ****
//===========================
let form1 = document.createElement('form');
let input1 = document.createElement('input');
form1.appendChild(input1);
input1.innerHTML = 'type="button" id="startButton" onClick="playMusic()" value="start"';
document.body.appendChild(form1)
form1.appendChild(input1);

console.log(document);
document.documentElement.clientWidth
console.log('client width', document.documentElement.clientWidth)
console.log('inner height:', window.innerHeight)
console.log('inner width:', window.innerWidth)

//===========================
//**** PLAY AGAIN BUTTON ****
//===========================
let form = document.createElement('form');
let input = document.createElement('input');
form.appendChild(input);
input.innerHTML = 'type="button" id="dialog" onClick="history.go(0)" value="Play Again"';
document.body.appendChild(form)
form.appendChild(input);

//======================
//**** WALDO BUTTON ****
//======================
function waldoMode() {
  document.body.style.background = "url('https://triviahappy.com/wp-content/uploads/2014/10/waldothumb.jpg')"
  document.body.style.background.animation = "waldoModeCSS 4s ease-in-out 0 infinite";
  document.getElementById('mw-head').style = "background: url('https://triviahappy.com/wp-content/uploads/2014/10/waldothumb.jpg')"
  document.getElementById('content').style = "background: url('https://triviahappy.com/wp-content/uploads/2014/10/waldothumb.jpg')"
}

let waldoButton = document.createElement('button');
document.body.appendChild(waldoButton);
waldoButton.addEventListener('click', waldoMode)
waldoButton.id = "dialog"
waldoButton.innerHTML = "Waldo Mode"


//======================
//**** CRAZY BUTTON ****
//======================
function crazyMode() {
  document.body.style = "background: url('https://media.giphy.com/media/11fqwTqAu8QMSc/giphy.gif')"
  // document.body.style.animation = "waldoModeCSS 4s ease-in-out 0 infinite";
  document.getElementById('mw-head').style = "background: url('https://media.giphy.com/media/11fqwTqAu8QMSc/giphy.gif')"
  document.getElementById('content').style = "background: url('https://media.giphy.com/media/11fqwTqAu8QMSc/giphy.gif')"
}

let crazyButton = document.createElement('button');
document.body.appendChild(crazyButton);
crazyButton.addEventListener('click', crazyMode)
crazyButton.id = "crazy";
crazyButton.innerHTML = "Crazy Mode"
crazyButton.style = "top: 100px"

//============
//END BUTTONS
//============

let fellowInt = randomizer(7); // update max if we don't do all fellows
let fellowsArr = ['Duygu Yigitsoy', 'Keiran Carpen', 'Denis Dekhtiarenko', 'Joju Olaode', 'Zachary Haluza', 'Keriann Lin', 'Allison Pratt'];

class Person {
  constructor(name) {
  this.name = name;
    this.left = null;
    this.right = null;
    this.top = null;
    this.bottom = null;
    this.profile = null;
    this.koreanName = null;
    this.chineseName = null;
    this.bio = null;
    this.birthday = null;
    this.title = "Engineering Fellow";
  }
}

let duygu = new Person(fellowsArr[0]);
let keiran = new Person(fellowsArr[1]);
let denis = new Person(fellowsArr[2]);
let joju = new Person(fellowsArr[3]);
let zac = new Person(fellowsArr[4]);
let keriann = new Person(fellowsArr[5]);
let allison = new Person(fellowsArr[6]);

duygu.koreanName = '뒤구';
keiran.koreanName = '키어린';
denis.koreanName = '데니스';
joju.koreanName = '조주';
zac.koreanName = '자크';
keriann.koreanName = '케리안';
allison.koreanName = '앨리슨';

duygu.chineseName = '德维古';
keiran.chineseName = '基兰';
denis.chineseName = '丹尼斯';
joju.chineseName = '潮州';
zac.chineseName = '扎克';
keriann.chineseName = '凯里安';
allison.chineseName = '艾莉森';

duygu.birthday = 'September 1, 1999';
keiran.birthday = 'July 10, 1998';
denis.birthday = 'December 19, 1997';
joju.birthday = 'January 22, 1998';
zac.birthday = 'June 30, 1997';
keriann.birthday = 'January 10, 1997';
allison.birthday = 'Octobr 27, 1998';

// PHOTOS
zac.right = 'https://lh3.googleusercontent.com/HptUW1YG8SlqrH-cjtMtvWkE1vRbQr-DKUU5SVDFJg6iFt4KrXk4lHaoIxxI1NVFLMuaCh3EIxPcPaBVzP4GJ3iR4_Npk4_EM1clNKr8oc1u8HRqaNR-HyIf_XQaj0OijYQ5H9d3KHAPOWJ1BDfoKqizVgIlQTNgpkoM9Oz_9I3XM691Zlo-8LKqCjLpwrc8aMpqk1a7cp9U_ou9NBEIFejbv4YVupz1zaMJbvVLuxnbuUBpGPQYcR_bJnqwvHVnx3aIY3AcbKGpHFNvxLGb-4k1_wRkUYyIvt3C-O_22S7tRiFB2xRDu3pIY4AH2lL8RPjXyIw7xWV8diwixshG2nIYyEUjvtwy9ltDd010InQSb2xhjPSrOUKTdNVwJdaNL6s0igIG4l4GEF3s5cRvI7Dg3OD113iUrIVRW9F1HmI-jIK5ComJRa9nJJLmKBl4hlEKfwm7I01gR1jY9kqJwKONeTZdcV0AtT_GgSGKFsKLRdLj3tuUfTVI0NDZuG3f2IHzQimgK54rviQlm463OFK5JBg6gaffA8omegummZhGbHxZ2_n-Pk-cdYb_t3C0Yu7NxqZE_Ge_3mHSKEU7u8Men1jygFBUPFVDsmkT7SKIbUG8aOZ9UCS7IvydGEMs1dBNCRcZKAT0U_i_kW4tM6rMik6z5EJYQU8uLVyGdjzJyhVnnyBUkC_tbCKe=s100-no?authuser=0'
zac.left = 'https://lh3.googleusercontent.com/fD9XgzIvY4OSuOzFUI8-yW_-E_fLi08iedZBE-YW5Xq0WgPcXSmnix4eovwY5EjgIPZmI5k2mJ9MS4DksmYeXuAQHX3Pi2PqrA7GvkEi4B25XOz3n9qLLwMI-4sJ3pETh-D-DQyrVwpIqsheF1Uom_BEv44jrd9y0C8pVSInqNvGjBfD4jlpQ_uHFEfOrdQF_RqKRsBLchfQwj0wWD4fGXE-h_s5f-C-UbVRhIgsMwNO05Cb39lA_xDyO5wvJwBAWYSi-UArTv7QagrkkmoG6R7s9lOXjNX5qfHcHb0dBFy8atZ-474I5-O6oTcswU6tw4ug3uPo462lnj0VBOlany10IGJ5A1HMnONXi3RY7V6SCsE8_3qBgIuLHxaeC7dhsKZbeDob2Kb5xQ7rY6pP_wn75j8qZaESs5rLFMYwpFIIoidkzeZszAkgxZGsR45b1XgF2NFrQBBU5vlZFVSr1li6fkqPTAX1fsm0gupb3te7UHRfPHrBXKPKRQz4S83gZaJrc6Z3tB5SWMCy-zz37EnvoNPhiTAAQ35Ushokyw43CDJt-KQiqqTAW0fHjE8LqfETRJFpAoTuTukCPhoI10NGm3a_aHvbc5jd5S9fenCwnK0Ifqn1sCN6M_pY-TAa0UldPM8VDSCUSbKb9c1V7mDCFuk6CWjLI80sgxcjRcHKsv0E44xX2A7EXZPG=w100-h71-no?authuser=0'
zac.bottom = 'https://lh3.googleusercontent.com/SCoItQp3F68wCIODhijHiRnriXihnFkFRIDSvpakCxUUqb5Z_nOFuQ0mt2aXIoidF3dcnbIfRkb80a9RpDENu8uMOfGRb7rJ9ksOBqwqgdnUQeBNjfEQdOUgqlDRx3A6Qz80i_Qf7l0cdRebcc_orl47PyZsv3LrO7ALrMKODAJvZbZK2QAcfOjXGldNiOkcsFhkQW0fr6KVeiFBCAirmY6nVR1vFyNcu6up_ahsUIxAXC5uo3-p-L14jlA6Zy9_pPNalMqV6yXJQufiYVBGfU6pN-HIhuHha26sI0-0GsTSGq4VqxQ_Cb9j1qcxHbWiwF9mVa0k7_c66FB7hVeQoLHN9DXbJWyOHsnZXmtG5dcMiW_r3xmrCG9MhVheDCXMjzpWCNaotjy7xGvcSmi8VKDuIWwNycLu1r-wqvMx8eUQvXoV-_fEoi2t_PeaWUG1Wj9ng6iz9_Ysc3KisPNxDfrsDiOHPI3vTUIG_5EqDGBZ6Y0iQ9Z2M2dMzCzVUx6mSKCNXBZzHLczmAjQDV8nXYlcMsF-EotF4l0eq14cCGN_mo2JrRN2kKz9ps86kVh57vZxgU-1uV1I-iQaRANAu43JPdz8TrkMwy97EiEnWtO8D7_7uGeJJmk_SXoBir2uEGmmLYdeMRaLnFqlNWJBtUeR_tWh3bM2uefrOg4b2l_zSsgdEn_KIZvOm9tY=w70-h100-no?authuser=0'
zac.top = 'https://lh3.googleusercontent.com/n3NpOBTDnnEFtVpV7MbRHiV-SancrQXEBOitCRvJav_vc7O5aWTGs6CNCnVI6dGZlKczN8MoWGuT4yJBxmEzD94JChMUw72XddK0drcGtue-6BhhC9oeokrRtT8CA0QVNHRJwo1XqyrNxtjHLvuOiwAwYnoS0JV5UBAI_TI9pQlOWar4Gy186rWoB7UOhACBQolfJw4lHMFNEgoAsTYlSS3_3UDvB3bZZTagAup_q2x_UVljwytahfGwz7XtmWyUy9OlWcztYCWlNt0cF8TRZzBPAePo5KG0rALaG_zmtSzGy-zbg1-H1KeE3G3Z17YC7WdKNV2s1udwZ8lU1WMb6dwq0SdCqg_KYh_RMvmjSM-aQsMditvPqcyBbWnY1SuQ2R4h491YsceJ8chjY1PRF1Hz5Uq_On3-FWRAjv7oF7_6kvO7ue9C3uvTkCaYkrajxtO-hwOz03Gk4YNeDqfKq2vM85EMcryh0AMOgdh7iVNPkKVGcmFGgBdbucwmpzDB3JCa9jRJ9E7Zr9AecvS-jefHeZERAA4FxA-WXMjr56bv_rw_BWlzuClKJK8JlsmMCxS4zm5trl_CWCNCm6Ck8kfrINA1ui0Y7NpVc7B-0IhSgKGj8GmGCccsm4AhQih8EHkn6ciJSeQsPbGJPel4j6JjdreYjdGxf-RSfp028G4lJBWXuXPL_MUbI_FX=s100-no?authuser=0'
zac.profile = 'https://lh3.googleusercontent.com/0zsZ8wRR2hRYmPCQrCICyjv9-35TPOZM_Up3nCDk5jw97ZXEvdMzlSP3uV-QjrPHHdOMdCjKpJMdf6yjy1NYV4otc2hdOYBWRlQZVi1NOouOi3oXa_JJifTUrTbknN56XBZrOSsPaiALV5Oc1LiNN9ZyjVGl3RRtIKOWvY4gT89jZS-No8nTA6EPXYauaGnH5GYAMFMjoFYxYtL04cTwHm3DiE5iCeKzjPRMJgGPBa_Dbf80YmCEu39RWXX5BvFmkfYkWm1pIGuB8jRve4yNXSS4YeCEezmDfdq_W4la0XhX2JBfDTfSjHHNVVyLALIYwnxOlHRBULOMpgHZmkNxBBnWbW9Dt5PFbOCIEJLyVwIDt_o3qhgJOkKcGCoZYPla6EJ_0EAE4o30jJnoqHy6Ahfa-xdQJwALFTSSJ44tQojrXzJO5Crmg3csehL7oceNz91KwDWlpjKYZ87ERNXkQUQZjVj7Ut17hpSTBZW0hllmz6YeXpdc8YdykCIdkGrsJ5Lvs3YrxOLq_TVtB7WoxZYEs90fw0yFW_YBfB7NcNtxS2T6A_2FIjyjpATi5XZ71MlaCAeh5AOBIpeydXxQs64ELOQJFGr_4TCBNqXvVV7nQgbVX3ASZKqQU_2aj5rpqC5Dnj7LAPOJ8NChi66XbbbtjfoNReqTDVmqUdSIzHOSBtid3nUSbc8oSkn3=w362-h454-no?authuser=0';
keriann.right = 'https://lh3.googleusercontent.com/2aKl_QoPizV4CAh7vXI5EwQN0x1s3FCBQYPW1GHDpmLtuDpVtXc3Gi8UX7k6gK4HcJVdbajjie1c6P2vU8YnK7JUNggThhzHJPc8XvBwhPHNyz8x_Q4Eps888zDypaMNWCCkT94j4dBSsQ9TH6eO5nC6D52VAGMFOdGe20fzLTVQAeIPWz6r33o-Wnbuhmk0EWneLnlSHvSLyDw-s6V_CF2LQzdBGDp0SBMkSZmjFFKhg71awKIdxu_ysItvf7g-MonR1YBr0c4-HJOKHrIsx5cJfLlSOsnca2C5v9bhEJpX_7bWWyNWv7kDqLw5enunpBM2WcdwaZXQ8Eweb4QOia2w_RRofXlRLmuuW-dGl1ZAwuVigKz8wHUMmvR2Vgq-97I1I-yypL2c8npJ4JigbeAQDlN-OK0W5kd9p-qXWnCt6FnY8BDim6VVGWxmQ4nMdTdVdQ3kE9TgziaDQWxggoOytpG0h4RYxzahxYazFTUPM5dMthxf18bWUILuN8KVK-dmvWnKGp3wdCPGgXtd4zUBhfKVOX1qIq-LpqENTb5EvoY9lidhfjKoMrlsuol4F6UBXbSPxYkp5nz19LFjFVxkMgxuC6PBbDIrr_zigAhlBeOHPhN9qc3cUFcGncin-1lAl2E-mfjVCd32ybqr6xI3B8yQaxNnNoyC_UfutWgCEomd_rGVb6t_7rHC=s100-no?authuser=0'
keriann.left = 'https://lh3.googleusercontent.com/scbilgQH4X5nLIoQYk7lhgD6kZHxRYMicT67IXz8wNsI8jQsqJ65GyUtyYhkP6cb_yie0PTRu_kMSOPpjPoEgYTAEgnM-G9C89YF-fvAcPE070cKbJbgaea5vmu0HhbUErGEp5xzhgDzFp-k0_Fzt9CO3d8c3ImFcUSTfilsi2jP7nxCnqj1PqMnujxzuGoPJoesWeApqmbf5Lxzvo1owvB2zjKoNP2N8--Tdb4WY3_45IP9grAXSVdm_LH7kSgQap5P9eB-LjxlgwsQvQ5PbeAoyCxxri3c9DVBw9kORtE1X2gX6YGkIb4RGw_EqfOUtNMPUYQCrY_LB9mc0870rabIHK2GP6oJluVua3FBN6VzImgkIy1BTpHtp1SD0-WdDrPzFluPqY5wRkawmDCRqddbQfoFKB9Ze5ygJI0R9jtQ7doUDw5AXjAGpi4p-bnOZolnv8cRYDl_eeBeoBRxmfsfOaWlP61NLoEvn2H_24g82T6IFc8G9eml657E9MO3p7oWqpi-6aeACC1Rhea9_6HsrWssNw-ZEbW-ZD22CeAhjLWl50qn3T6zj_YSCR_XxD2rk-_6ngBOCnHz6NdXwnywbwmNMlDh53AOoUCmWdzaO_ERlEMkvq4knHdAbhoCFCTiQkjaClVOTjScy0uQSFl1vs8NlKYpC3BL-MhKKOKpAKonsxsWvEufrusy=w100-h85-no?authuser=0'
keriann.bottom = 'https://lh3.googleusercontent.com/I9ma-PSZ9DBbaipz3paibizabsVsFCUaN9N7l8e3a8WwZuGE8SrYDakHVzTzaPJAPF7RI813-yS1WE9R8BPPNZRUyU6yh58OnzOqttMk3FARwAUCt5iZ7_BcZF8MmZp2qe-LyMy20_qizXdD77cKfZPw2V0NoNx4NPepShwa7Ozbo4i2MEJAlQ87xxaqPWdlndxA1UESPfdUKhDzog6I2DZS38cjZksikrKgU_ucM5GDBOlWS_eZzIlEEUqmJkaBffCHkIKxP4kXqmHIKVrhhBfv1LdzchWw5U2YhIgdpU1wKdhc9geC2u2BeRxxkV6SEOZBI7zZb4uSIE_sU4defZqA3SzJNpDKJoJIJhn0ftnVXAqd1uo__a7-nPcLUqNKsTNObGvK1RR0tEA04ihpdOq1GRyJtJ2hy0sxKY1bECyBMsd5WU_f6VmBp1RkNVKgvODT9bLmkpvXU2rt4K9zBlCuOFzHL96arS-odOMFWZDVZ2qEPyFgus4Rbc3MO0EA6mGoxgJz7IZ5APhl1G2HDTkLKNVzNlFrIkTigEm96Zf2m63PUPe1GLIcN2YHFshzPP9w4AinpIkBsS5raO-WFC1pTzw60TjRlgWN62GqyGpLtEzp0eTfP5bA7-S98WIxnSZrTtAwspFlwo06G_44KJ7bm3v1zS8kxdNd788SyqnOhjL_vgyAtPlrP23X=w84-h100-no?authuser=0'
keriann.top = 'https://lh3.googleusercontent.com/S8HHu36iDp02hR-x_YJd1deBK8kxXYqMLVxPiLvbDzFdClgO64eljRYS8wjJgXC2uBCcV2MJlCUcZkAzUCclIPfGBX-ZPqjfzdHTJ-xrQG0qaxU7EYP0fNFe25BEU1avDTXluD1_-WDvv7bIsvhiT8abJEel79hJYIzEWtjhg8oXxjk3F-OcORf3HvzMZL2AoOW2W_ufgZse6vlPg9aZyjKZ1M-syaeRyaW0ONQtFec91c6UMhnumWNDqI54PhG_ijGwJ03_UYcH6Uh2_dXV8FrLwxgl88nb0J7EcmPYygDHkdMdHdirBdTwea7nQJwYMTRaXhuY08XLFhrVxEW8YUnXzkD-HOwPX-q6dfsdp6tHnkyieiqUHJdndsQJQ4sL5oBGIQ84YIK7hty1GLXEp0UTWuxgBaHZgC2rZSqrkgL3jiZrAQ9aVA5moo62tv6fc3vTIfcGAbrZTcgc-lCalajOlagpat4X05tDR7W4oQL-ndUerMfaqqgSsRfgZp_vEiEkXXiXfJRT_qyMpYrFdp4E_J5MHCde76rco3sq9udyVb2FwGJ6zyqIyPuQDRHyfP1lJMBvVI3UP6XjZvwTMKbi5sC8Y0urzAlxjvGmhlZTiFCtaw2GjN2dImeicCnRIDjJ_pECMmuBQgog3afuBjPq76jLmh1Itc8BvK5fDzr9zo52tUlQx_KBPDEg=s100-no?authuser=0'
keriann.profile = 'https://lh3.googleusercontent.com/LrICbVlAZxFKyW42LXbU99jbtQsbphqLKvgo9DKcFFKWBICDAQaLsq8JieNC2Dlx5VWXjKCTCQ-Tej7geBvJJ0hxbSzr9ytz5A_v-3w688Em_OIIPqgCaJJPzT3l0pe_zMHoDSNXLNMo4QHU1zpGHxHwBjTBoA-WQdDZ7O8yg11d3u9WSJERts3oy5SbUs54OWh-VKselWNI454k0MilgOsUK3PcyX6-vWXHhEs-Txcthw3ZOKCKf9hc8YwFsSzyndbSubjwWUEKbTLjL9_MDvMTTJSKo1TjBk9CVQ8j9TXyd5IM7XZhgaG6gyzlZuZmYb3Kd_3EP7hn1AFh5Zy9KDU3MdUZGJxOM5JzEPs7YavzFZqfXTYpvpfKI4_tuosUi_4khBF45knCgEAxliqB4bUMbagRqwqJ84r0OV1jYx65xgDbiqbGISAkQACbYj1onCuVQF0cJtTirJtzIAZm4aGOp7q270rBTdCNgEEW9RdZqfHOLDfsL6N9M74lMX86CsxhirzA_4rV7hHMKf5UBi0MtukdKOeywmsi0wpu6Wcc9TsE60ZPMkPm5Oi26eqrr-8df4TW4ghVx_qbIzgOtFsC79VN-psvPRvfL5ZDxF9CtfW9pc2VPWFXnRz72NVQ-CKwk9HaPpHxjqsMq1KsT1R8RYh9BtbFusPvzi4fhNMJ3qN1HbJhhpc0GNVl=w326-h416-no?authuser=0';
keiran.right = 'https://lh3.googleusercontent.com/2wRRx3V2l3xPiP1Ne4ft1L-RBLSSes56xLdGZcWItMt-pwU5JPMf82ZzYtLHVdAqkooOByg8pma2lTVLSOAgGaoXReAoCNRQybDuDx6GwyX0d3Cz3s69wCagz53fCk8n9sk7G2anK0Cs2YFzxag1x8nn3_mpAvU2RSgD2vL86n5BonhFk9rY_ycCEZWods6LcaOk_xPb4QbLoD7fXRhNcrDlSRA4bf21ufDx7k2-wm5yV-F_nYjLxXAmv87noTw3OBvsFIdawz_yCx-sR-ou9GEUW6E9Vo_D9Xjef8cDoP_D0YEO5hSHmatvn0aPkOLsXBeyRjbFpWOSe1F03Xnp2K8EMeC2G1MvN1SpXdsGYwLvTJMpZsaljhMfA5Ew_CzvUFMWT8uTbe9dekqjdzbv5ymLvcwh-2x3_986-FQKZ728eF81Dq6JulE8jvk0dIDeJNw8J9Fd-Ic_7leMz0APB2NaK-WVx32SPRk-w2NShNUglUwimnU1vn0VawqgRgSQP5kMYEKtMaOIqv48LSyNPI8CXxYLwS4c3YoTjJ53rXY-9vAC-PL0a60fRTQgg9RivPZ1gzq4CTWjBybjTGRTqaEVcBk_PqRrPan0jiZxa1bAybaE9p7XlM5-i4NNqwX6Q_efJdfGSDCAEGlCUcmXyZht6BY2-aHecSySjqJFILJDtyIbDIR9n4EWQ8Tk=s100-no?authuser=0'
keiran.left = 'https://lh3.googleusercontent.com/7nzC4id9WOgGSmOw_rG-wXnAUQRYw4sENnVTVeVUoRtzkN1D8e0pWzwCOnFj7ap8nsNNm9pIM9l2bz91nt5-jz_LzHNBI_eOnI4UnYPj2EAfjOEOjc4JCSA8Y9Mtyai0_i4sh_G345DzEdQ3A3xpZUWqxs9vyj4K6SrkXkgpO1MPR8SR0A2DPXhfcNrM12shAJ5VJ2auo1ZRrBQFRnVOQG9B-EsKZEBRGatOzXPOxd6kng3h7efdEk6TGWm3YVZtWuMmDep4QPhY6XW8Shotkp8aSZGFioOwrBM_r4ds__PM4MFOxAkojxlhppzeoxuI4KwU4TzM8NV8ePXbNc3x9nvJEhIBHYIUIlBDuHragIzBk72_EWVmQw96yBPIZ9anOQzEISxQKEljodV_xcEp_bvNoWmtYQTLvPnQq9c3O_dGgoeFyrPrKQN48tlaCz9g0BM9fkAV1bocCdizlbMSC9qWAfAzvSXycLFK8GgV1mqL5WFKHhtfUUUIy3klHYyOsMVw7PglflxJR6fq-kAp_SQ86uxuJUsq1e4J7pXfxWaDsi8IIGo--nHxrg4x9gjvvinkMVO4YW6wCQb_k2C8dKbyxLpm27yXsdc2O2jUaz1jntREPyFc2jTFX6D8k8a7I2_y7ZAqT3IOdqmKJOaj2noaqXPzLbE1ucEWxfe-zSz_9aEqnGurewVG26Cd=w100-h71-no?authuser=0'
keiran.bottom = 'https://lh3.googleusercontent.com/ooz4eQkvijqmgAV0_DCa-BR0GLOb_9ObYTI2V5HNR083K3L4f9rqm6gZczaV-P0vDvhrrJ3E0tpq1MJq51ThRfDyUeD5Zf2loGRPpwsJyBUJW8bluerIY4aOJf7Emv4q0aCYxjSHiR4WNsSkPy7bIZ2uPzwIzMDqVCPf1zLGu3Zz4V1LcKbGW5_44ik388yYcwoG2tibh4Z-m3izonBPlmfwW8X2do2WpKeE6NAAcUfFxXxh26rh45jDtfgSBPXi5SZ94vSksxVuqDdYzCyjXvS7p-7P8ezwZO0w41bMnSo0vj4ZQoWspfM-w_yq9zyKrtXwBO2tS6ZgNCvBP7ZOu4LFzRQTYndep7mbGI6OQXCVD9sh9ZHCH34TuBAXeVmzhhSQavsb6l5EDp44MUWTL09FU3i-WJ6Y3kkbcDVeFdTmanQzPDf8m3o0TYfPIH7aRvWCGrsWvvrKHpH3irwp2AgtDENgbpHdw_H_fBEV4u5F7g6rd9mkwOPmtaE0PVOYbar-1HRAm84_EQbnqhL2gJAaCrIGbkCzNmC9R1kRXOOz2pUz1bpMaqDNvGGlxcLXyIXVzxvRt35d3Nde-rSqTDh04aryWCZjMBsKKaHEpPRrY82wlb-fvyoEm9hs0f14z_sb60qlwebCMHu5ENwhx36_cJETAESssFubxZ37dP8zY3Tdw6Q4IItm8VQq=w71-h100-no?authuser=0'
keiran.top = 'https://lh3.googleusercontent.com/XAKALaA6uifF90ReN2IGnOvuw_Uw5Pmf0BDbQxgUec4loHBm_LklP02Y2CE4MGskwE71qWM1u5t2iEjzoeZwf85zCB-yof_1UEa116iPJ8zuYSIEr9pEqQdD8EACaKsA_k9iWnmn2l5flsS6rnMxFe83IN9eOx5mrBXfZBgWDQIdCiYC5Hv7ET0S9Wdc7Y5788jg8qqz3qhvrjNeq5ViKaFdUAqlkm-AownqLMM13cj72B5JXRC_ns8qyE1oJeRAn_uOAchGbGGlTWZmc4rj3l488gvimIL6F_SMnBwosBdEZTfPwDM4okoJhvoPevFWYpuqqIo3gZ61qgFhU4v9-drLx7kCGTRz7A6p0SSMdPsf2dqS_9diD2AgIddo-Ns4BYx6-6oNdag7dZqRM54K8wjv4jJmXT_WEvaLmzF84tRdj1TrBoZ3iqjxuWYwGoL4rcQnoOJKuuU8xuHLcSyUX8lmIiBAd-EWZ7fqWa2M_xCjV6ch1RZXHu3ywFDwujEEmSalW_m0VWNfHE1ScRp3obCQXlqLEUHZuT-9w-d2YhBLOwO0NjWzZxt1OWS8wIuXfhNZT3IBKXAJxgKeyUlC74P6S8FwgloEEhDqTLDGDMQSclcvomig9XIJY5Jg9Z66m5T16HhQMdkRwcZaZUUdlc4srz0BdiCP5hmsi-U9DGaUBHwIkjjWHyYpxwRp=s100-no?authuser=0'
keiran.profile = 'https://lh3.googleusercontent.com/2h0Kb7LwIqJ8Ni3rUlzQgO8Llya7ed9iwxysGc5aGUdDT5FeGwECw67XRk54GwK_GByTlvpYMgF1vcT6BJABAbdiR3YdOUSG9qN-wvkx6nrL6SG7ezFQTBy2X_H7RX6WdcCLpA2TWlOg8Npwrp6dOZlUotz-oQMBg2qSHKF2yRfF80FDM7PlxhfjMtBMe9AwKeSXnNUSjteABsM5ZIO2sWm0po4XIvHK7MSI05tJZZbNk2ilm9iclJi-zxfwlxKBeYs13SqJCUuQv5OT9dDz14aTL4EaLjGZOBfkJtQn1ibNild5vg6PA2sv_QE4JKwLtTPLXmxGg5VD0BwXwCw8UGfzgUQNrh1oMbRofG5qOJJgimy8QBdl6CYe4r2M26Kzl-Dej_FUFzqInkm2TN_bRpuJm0QHctjrAzNDVXfU6Ngd41BYMP16XqNBddcuYdb7FJw9X2ljxbjnqG3BNq05ml9s-HgfReW6mY6xYxZjKxzwuM5pHh_gVbWhSIiTMz8YZgUZ9gDhhHmrfrc54Dkpzqef9e9y1XHGU5yUkvXS3Kcvcxx8u0g29V0TpSrwm5wuXppoUeXr1dU4iO_w67YzbO0PHiHkP-WVRcbKfmk0kOwgPrD2v_E8EuYZxJJdiEUS_l2YRN6MSjbAHJDFnf2sNoGAmmCbZNZbmsQnRwvOasSw_R4VixT03WR8p1Py=w358-h376-no?authuser=0';
joju.right = 'https://lh3.googleusercontent.com/cUlc_Y4RAVKJD6rJKElND3p0ET7t91pZi9ldYZlg60S0WD4uAT0B3glwgBqTQwAJoG3-TdYXyao8iyH7NIk6tc8nD6SowcOjRmRTXqQiCuEb6J0DnpqTYst9Myjmuh1p40cwxlhJV5SVu1iq2pdMN7lArrNF10UYNtpLz1V9g8_egYGFcE6lOAJvT9MnoYnAGlqw_QFOHgPkdOJ0xIRZ2DK5Azd6NR9XKs1RbGIu4qlj-q2ZRgyUwwrzTnnkmEs21m07-3l25OsQsAP8lwWG8TWqfRbFb4NnNi71Ihm-jcSPRyVZK_kwzqzGn-M0MihNj1yK69I_Ya6FCmYZKTj-ZE4oW1oTTLedUxsLoRyG5CIrLVDvjH1Qdx80SLmVmMlUn4iRyxcAypoJkkUCY_qfnK3Z8tN-awYp4wUQV2aC5rtuVWeQSQ8o-u7GqWIOM4bnNIIeHDW72EC9z0_yb5Mvu4lBvbvTKy0PWubNpkzzJJKta5l7BQmm0linpRUC2Gj2VDmfj873bNuNnn0x4CbPKdjFlwihpep1S5sVi9A3Sm7j16P62puMHTWiSfKnjv3yoiZHXx-i_wjtc1SWQiJxw9QnQdr2SgqdT42BIw7oZzKJ7xul4ojpQHiGAFfOuJX6fM5lFSN32Q5jfMj7I8quYsHsYGzgb47_QlAY1OsLm88kSH1EWMMomAE587fD=s100-no?authuser=0'
joju.left = 'https://lh3.googleusercontent.com/DTLbhCwoSRat51GZGjExDZ1pNdpJH2rlZ-eopnezxrBug1ZZTwkv4eOehAgbkaEEu93G0IahKVg0--ZKsnaiY47NB-ayc2u2b7PA8-fcbRhTzszpD1eAgeDDhwk79WBbgFMq2Vtk2X5vqUup9WCnZFZQrJs2WRdVEdCAYvxLyokoisOSw7_8q_-s2BPF2hOsfuuWSStDOMXJLrcZYlqRzT6pQvPJn2wp_vdqDawzbwBE5QU1yLvf3HVzqulynNmXqJy6Ddr68AoifJZ0Eyceo3v5slPIaSKT6Kz78_u6zSir2RECgYB1yEJ_DxzSmEQdmzajT1CGz2adv2aoQLDTC9cE8jJVsAB01b5TQ4ZmDn98nOl62Chg8UVAGI82sKVv8VS6YcIn22oEtXqd9Ov_zybaQbQfoMdTfSEtU0GIv_RZY_VQa-s-mP4_lY1kofwa9wTdkgyPu_OmH0eTXt0_BPPPBz2VDKpCVgcwtljtJ1QrtMBDBe_e9IpK7QZm6a605BGQCAj76jAqGXKLXM3Dzk6MqclUvTSJMT52z5seQReF5R_ITsqCjcJPQWFfs36p8OHBtCcL02qa_EOx2EbecbYdkyDVRRm9-0mcC_IBvNcErijG7n0_-xjwAAcdFrFGVYTTjXtuLIxIdgrPXhjNlbs358HeKyCEIEG2ONErucdx_B30kxl7BQOZ52fW=s100-no?authuser=0'
joju.bottom = 'https://lh3.googleusercontent.com/tixf7BbPMvlOH7Zt1Z0ZLgo7dAxZNtRPXRxsO_5tQWmznn5ktrRQbtn4nDEKKUyksGQIjRNkX3v-jhF8g8I4jtNxECcN6YFrO96NcZlaacvLZFbvp8iExLDGAO_AyupPC9ljFDgs2ZaPx_PnaiMKiL2uItr1n9y2lxpmGIJADxyrYlz09d6NNah805mE19MuX3v76VBsB574dTl9gvHR6-ary7pVsLS1tm8S7xJMGdpDtHK24EpPJj-a7CvqEFi986EhtrSktYklb3R2-fIbMV-98bS6YhpcYkgUXS9rfNtJ0K_xcPbpeBpFkjXcJwv4Gp0o4SdGW3ltkWQWzLf5YnoV5O8ODSzSitk1bRiYwLU4lTF0j8yDRZLLSdI7PjUtWK9BN-tgmgHHEe90iXzcJwZjVjbd9d38Q9mTys62nW6cdyrMNLDZs5F9A_f9QpluX4OGFIY8_vp5lDT_OV3fKWisARVJvrYNSr5u1OUAN1TZel4iGJ5Rmha2UYfDMSnxViRiq96B4yP19xL5Ghw7Ca4tl0X5Ckq9Ka3u6mM3sonQQD6EznufQl18eWMexrRHCBViIb1vbSdTGORGdvjfiCuq9orvWEN9exnCTvQjxSdL_Mx4KJ9JlnKfLXoeRVyGJypLuu1c96OHkR85pUqEFFy1uyuj2H6D6gRDGjjZF7VqV4GYvHMPzOfVbtC3=w73-h100-no?authuser=0'
joju.top ='https://lh3.googleusercontent.com/KcApZB740HS6GMS_Dic9Ff8v63SQ_2Jhjeb8X9Io9v9Jz-gr3v0jsfRZAaNhzYeQqcwfDSiertGa1HsnKIooXOqRPItJSa0VoO18Fg84yRVMMn5YU35bAL9XiTSct7D_QjpkX_X4DK16aIzdxy7aenTQyEXhJ7DYios4Ep9dEhVnt0Q0IGqOdon4Hl5RYEyBL9Bh5tZgV6pmv31NoqxBMf_J1bacC7hSbgg1uyl8gNRxgvq0HJLpD_CFp1aHrXQ20z1bjI0BXh_WuXgp9KRQpA5OYUxWgtTbrPZiTa4Cs_VyJ4pZBKl5RXiNhS5JCUAFxmtflCN_zxRSf5_lNAuoUeyn58sd4CsJVcAQbE5iSjoeLs2OO3erDzYVKiXgabRqh6bSbepbkIsuKyeJMpOaKYX5TgDjvElnaghVCS7iznYv8jWv1AsXgtbVzssEvOT1sLHt5oyMhd0PoRy841RwzLvbrNCE-YTij7YVdMmWbTizUBWFfhIAKwhUtxd1d4oMHwNmTIXepLKIBc8k6zhmEjQKE96BEg9W6IRqt7qX2_jjLZS7Yj2_A-lYQsLkd8IrKgUkcMzSbToZ0rkTlQv8r31iR96_01kf9kFOvF6Ly_5ATq9QdS2oMQY3LuuCcrLn3QPpSVkdCL1KLXHH4thuT1tIBszV3JD7imaVFZoE85PWUHUWdRN6og-SqmO9=s100-no?authuser=0'
joju.profile = 'https://lh3.googleusercontent.com/ynTBAVpqdLoh1ZOolGsIu5v19A-RnAu2bulAI0E9cgKkcV9e-iD1-wlfKcq7YWmHyFR85MF3VRSvx4YtSy6ugVrAQzU1S6EICUSQw-GT-PvREvjrlvaAKlRPd6U3VW5sdDhkWjKRycyE94WPdb-GoqYd5EboaUQxP45of1kY7RoCVgaV02okQ4_izVZ18lbsNXp2v_1nRynf4ztfXS7969qgAZFv7N5iYoY_BYPOv-ePn9rSVsLy9-UHym1TeMo5yoHrQDXJSSxkMnN5hFUTIRij8k7hi_nyOBMNdM5H7IlxdkA06tO-CqGAFHsmn2CMvhQyuv80w3S5WUrc3lbHEXc4tNseYcu4scCBO8hqREnUOPOft_gEuVZrV_XpGSsLnqHz6ViM9f74QKU69WtNiZthHFSw83ev-prkHdV8AlJklNSFUVqvUZRsG9TJp1_tkl-zK0jYSIDeAbeELrpmMcGm1FG_BMpql2HcZFgQrKXiIoUzu7TY0rNquCWonWKxm7WOl7JTuAsD8ReRwPQacsX0_IrWuWPHqkivlaBoFBYimp-mjstl5J8cSfB2JW3W-_3Qmjpwrvgrtk-VyFLr2iE9f0fII5GmieNE3M5m0yk5TAr0Sn5cDZO_5pd3oV5pN5lhjZxm3T3EjnGI8PPnqV95H3nr2fwsH2zhxl8sFjIpXO21SdVeocpySaxb=w428-h460-no?authuser=0';
duygu.right = 'https://lh3.googleusercontent.com/E0M2BKRJ4puwX4v1NXkelcW8sSsFfOpoxJ3K9qLcUSTjm5zEohbu2SZ51MS4yIL4ojA1PgN-zarOGNKXheV3VJ2jhrvoXsdkh6Kaa9fjZudu7h0cjGdfdAtzJ8S-fqePLcVi_L-dTUHGvCwJc_ySmBS59ZzMvoKP6upNFyHtgOeUHUTfYkeFUonbZ0b6BZWOhsdyijX6Rt1uAImwE7jrLZ4uiNpi7qqXgyRusEzCwkxNHJPIq4w7wfU-C80vuFhrftpYvsifxmcJxeS-oD3vRHZMTVd0GBpPLZE5_W7FiJzT5IZz4URYf5K4DqkahWbrtHexE-71I4D-WDnD8T8TX6o6VDLmVYQROLJrPYWojfxMiO85HyrYscXMEOVMZu8rsM0u8CGE1OyaR24XKNmgvCphV3AoO5afqleQeRIDGfKTkldPDxsafPV9B6cRGkCTscMHedkAGC8m8XsnrF722nsfwH_t9NTWjIYixZYJUZtux6l88cjCIOHmLGY7LwD63gA-FVK95eYfPGQ3cbC3jwTswvRf49SjTfZz0wQZ5A8fxxKba3Q4jslGA260FhO_1UJfgyMWeDYf7LlayAN_UgSPK24KoRZuVfc_n_XFxBdyHMvoxQ2nZjNDmcjiGC_IK5tEDq2lso3UFgNfSQeYv8Bu0VrJkkSKb4zAwmXtph2IGDQE19kwY5MU9Xp5=s100-no?authuser=0'
duygu.left = 'https://lh3.googleusercontent.com/PQ0gPBc8cGKTOpJ6k7iSyXfwoqlAZWJSsxOrjjLF5yOYWKvgqfWdcYImUk0x7sgCMGt4AjrfwKTib7RqDCeNuFfCkcDHR0SxfpNzolobEGO7g0geM9sa7QjdWRTM_a4zmitqNy4JNhzU4kkUsE_6il-nRC-GintMNxxG50RfhIA2t8iCSJmtb0xIxe7ZbEz0upO8FPHpePJlar2inKFDY-n4TH2JVX3TiSg0EL4brEKdNdq1ofmq0FHMT_lPGKIHt4vzj7I2i4rqPn4_rTWtMY7xKlHYEGygO3KbPost-EXHqVyJyodhrtAosiMfNNS2LJZq9hCkpVxpAxESuVHXxwyJUm8rq2-griGoxVmmND_gzIQw9cxYLfQR8vzRaaDIFKaP5v-i6qHqLX4KE_LDnywBdmOG93PVKau6gQSf9YevuvYTxcbpofZLNrQhm3-CcwcNbbMk942B4dotdO1IJvdBMsbQg2Vm5RMF4wafIo49p_e7_o3saYtIMrVUJpmNwjefMho-DRnA7_8iVynAd3NBFXgWcnZnLHW_2oNKbqLy2slgQ9tkL3tl3tIeunVtNKsFG5E09UztL3CknpFzF26CubyBTYxUIHD7-Z4DBMaJUom03D1o1hfuBAL0McYNsa0Th2Bpjbz6ELWF6-JWa7tOn8fCsPrXMfwI_3cwVm9Pq6vIMWAa_AuFY1TR=s100-no?authuser=0'
duygu.bottom = 'https://lh3.googleusercontent.com/ypPgSHdeJ_U4y9iVvRQl4wBeQ2LHzMxrB7ivIgimBP08KImzZRWslcw1MnYCEX05o2kqUw4zAGfJoeiG5feeAlV3ngFblIfraStvCgrBADyUfnw0GZvPwLaUnXA6v77G_ycty7VXuICUMW-6nekil5kw9vNfIaIiEVkeEgsRMnPb547bjLZT5Zkxi9lLZ371Pgwddv31KgeN_63of2XDhKSIiQi0amb1L2Px9xsejyiAfL6BOr1Jt6pqEp77k_O2RYxUxL0ICPbzm8bIO43YcfocJ9P3Q854hMVGK7qXuUqaG1H5rOS7alwriBErL9fCvFFUSml1K5r6JbzBSQL6fXJFED3ufGwC2222esD5h0rzfaOpniE9OAjszNPAowJTbpiFQ7wtYSPbNt8psd1To-1i5WNa9YS9Kmwh8J_W075sOCLnwHOQM3WaNhJdlYkycgpRhhVg7QIQfmRO4-rgj66VVosx1fh19F6Fj8wcg5kbA64crCAbmIpJT79dzAn8xX_PQpucP3wQ_WzC3P63YIWZuTtZDkEWM2BHJE6vBR21wvKOWTuhcCpE7lhjMvZKzBMqubJMi4Arp7YrnTdWwmhYmBK9wfeM4lHoLJRt-BBS93P9olVruuXaPR6nuj0tAFvPnjNccrDNuuwlf82mx_3YDAieKar-tMXSOECEPSzf7uw2puHd6wr72-fx=w83-h100-no?authuser=0'
duygu.top = 'https://lh3.googleusercontent.com/cjtKMwu-wdlpl3em3TxXhCxCPG1cmBYEJY5s3Gmp-8Cad1OwInpghr_Vl80Dkw0h3Sm5d77Yk2M-jM1y47oWNfUi37dA_fxzqMPPzHzwMoXK6Nx6ElWJm6uCr4WpJAcUhjs5JHH4js6N-rmPfzh7ttJpW9a6Lfk0JneCSZGymtNRASKqMqPDQmjANfU9nM_kOuUer40fRKN1lSXwuhAOLy5rbBP7QhmIOWHn9AYKLLHU1xWRw-ejgcAqfnfF1CXsxeM2IL3dxHZiqdGw5h5Ov94cTmOwtONu_ZQj37ZId32Uk2dOWwTDEBeBC6xfnwPKc7v7WMd4lpxnjaSIfWY5_FaPVowq-UkEETxdXt6hhSfYM2ZW9wwhF9eLYkadEY3awTCkEacCvAHVE_dAxiy6eWC8T4gycUksb9qAnsXnf75s9x3Yv5jNaLvzng7TmNeANfe4ju72336MVC5qK9QPgeaBru7G26DOdf7a49bV4yoz5GjLFMOVKz5AApHKy-GssSY2nJJTR5_iBK6L4rUhQgy-LVrez5l40cgskWWAaPiarc47OA_Ohqt89lyGZQYpbbsuj37QI4gZn-bzOkR8UNfZ2GfZ79IJRkTVRYxvzxQq1TmbkHJTXWNNzt9hgnokh9P0YBo41pYNWAcxmghc6irIxp17sppG60Ty2Qsc-tL4hTvvpVCKUB5_sqTG=s100-no?authuser=0'
duygu.profile = 'https://lh3.googleusercontent.com/xJycTlDykXTZZMU5kLwjbFkwI6uilHqSFspCmj8pcJkXtAw3sgHuXE7yPu3xEdxvqrwjGSLwdjBwvpePbneW2fy3nxvasFHTrXKA0dWxKX3goS63dbzV6piENlkogpqxC-VHeWL6pwJxrQUNsJG6_UttMAm-NHnNAOB3PsP99CKQIQpYFm76q3V-rjGq54yUBv9-yfEs8lHmRpr3wwr9kzhA604_eWfX-MjCL5To7c855EFJoaPYO9PtCtQ5hh3uKnpOc71w6to-0PU0PvhpXJbZE1RDrCiI4zkRWqMp5mwrOWEo2SM5PKFV26OKCQsuM5bSHWBBiZqYTdtKuu4H2kb4R3qi-to_wdMgxgIc6hWCjzy2R6AUD_H3YyPwVMZhRUqqJ6bt28kqht2q-slnFh8qbWjz34glpwn6hYOVDL4vDrx4xaOecHggcKYIZvfV0iLcAmJnf9Anhwkh0hMMoPoGSwsTDb_KfFkOEb5RSdkYy9AB5QQAXzpj-qVKuO9AWvbjG-K9BpBemn8vX_uOdDlz43fBFaHB11Prfcab4oaZcnvB0DGOX4igTBZqPiSPR8Q1Tdly2hal15O9ifY7r_DQew2Qn0eR3oB8KBuZ7BdPuQO7Zr8SKMTdh9DEyDol2eXu1dpYva2Wms9bXMSKXE2QwDdYIeRFv6iCVx_SgDn99XNId5dw7ZKmGPla=w442-h462-no?authuser=0';
denis.right ='https://lh3.googleusercontent.com/CJQy38jGUEGXBG5QCS9C9Y_gXPUFq4QxyoxVrj3CLLYPKzSQZNh1_vzIYRUtrrcnY0omujJhsb99iAZ2oXaqlN9nlAPs2lf9ZMZrFw9fFqGbRbV6oJcg6UWPjoeb_SuZqcfrF8UVf5OwatpQskB3UToNDiLAxgtGEYa8sIUuh5O8lstgW_YnWcdYL0llpoMceDAA0xl6hHiQhmN45bibGBafHj3mbAXXxIiALgCPaqsBDzmNROhnolpEx__kQY2ygWiAAflnfUGvuU7ZO7buJiQXA-cvkTvHaGZSQd2XoI8j-yenaHryRrH-RpnSkjvOrZNO5_qFhxdbtUv3QMnx2s9uaDpMnKmak4Pdxy5l5tNr3KWwnDsOaYYlYCtOF1WOtMzArh_4cP_ZbapgkP7hJTrDzS4CtlZra_UldbJR-S98Hq2Mu_a3UJOhjPZ1VCfBDamcyfqyDDeMus9lWXYvjbrF0qUNdWI8lCxDGO-iwtIBdmrGAzb4gpK7EWXO88Tjtt8gYCSJTfqLb0VI8gMjTju3UqTqpKndpov1PUtX9_n5slTDPo3JQTSIAqctnT8Axcl6MQk8JTZ5MkEKydlq1GU2tbnp1lpqTtVd5grAlrBxazhxyy73u6aRVCusOj6Vh8sHgwPgWaXphI5THP6jhGDeuyJRpn5fMVMq_4b0NLD18OawTA8GHXF4NfKi=s100-no?authuser=0'
denis.left ='https://lh3.googleusercontent.com/F4yQ_fSLr1OQ-PwCxktHourfq3kFjc4spRzOO_6ci3Yo7hiwsqtvo06ZGHABVTGUFmH019ZpDt82aQIooa5gOcNx57Uxb2BWv35RVN0uRBUP7Z240IKW6Egi9wx5srH_NRMAxayaMRJBsm5HoMfIK16V8ch2FNG1f_fYTQVgssjLajhmzu1xkDkB5Zl5CEznzxU7px1JyRmS4ryx_K1woebZqnyx1IjzweHvlL90Geax56UQlmgB81iw_KP40x_4su7LSz7LBTe9wUajsspUF0edtCiMipoX98gbId4OSdVvrkGtmCdq_qp69gw9_RNlnVF-612TMLhgONEvUhf3lOlM4APdglhAazP6x347h56y31fUAIgq8bg_mGP5aq9IprvR-_klFIFVEzqsoE40yx3FxsMgwVZliKQA9EWBqmaFG95h2qMJtlacuSF7_GJDy7pPXPpPt5sfemzjUKFhX9WwoldBCbb2Luc0jB7xYgdgx0im9knnhIsnpqs96v-x6zBWwndf5tS_cjnP16LCGUZXcv9tg4wgdb9OU6ktzcze8zkyL_WXjn5XYbyj5PxLITu8577HbxAB7Z3w5p47UmKLyXPtB8qDwKB92jf8AmoKL1RoGXND2ozsPSzxOVaze7Jn-I9YiXyMZGaEYa084Hgt_nTesVc13V76tEnp6QgoNDRpV1jeDbVqXc15=s100-no?authuser=0'
denis.bottom = 'https://lh3.googleusercontent.com/l0fSKwz7_rHECXZ2uSvG3j9fIjsmlsIpJMbr4UiWdR6h-7OdZZ8lMxyG49xfUOEvvoJhuYWz8jElTnBdN6HEN4LYMZvzvZhCRsHiHTAFDOfFbktpBH_ySsiSqXqdZlmB3VPbppWFTjJsPs92mKAvkiHXmaaZ8f-gxADcysstq8EJdHDCFyIt3MOx-LANr70vXpMD-fFZJQEb-mZyAmOx1wA1qi1pL06EPDlRI98bMVuZLJqDc666_aqn80FU3GfUpXfxtILleHa1_930MqEerCdiXs4_Bmk4JUoJyDfJvmhuZs_2l7j2Tc9MscDnFfe_g5HKrAKYjQ652rwPagGFbTV97AlZBGNRodfVqqF-rIxrxTzo2dyQgAbF1JeLwBOzJBdGb5_uSrcJnN_hdiJPpTgSQA7pCai0QG6QrptaJrvn2rseEc2dtam70p2AIxk6rDNKCERKbTlZA328V35huERdf_OReKfvWfG1H0Dk_ir7O3YiKBJuT0xa8nGW6h0zBu-PebQvAfkwIQ3sJCmE1GNw4TUt5ByMxzZGJKQevj03MlgWp0lH1fFFwQo2yn0fJ5-P1U3aXnyBSwrJLnv2EUzzID045m45XKgCdcMaBUllAC-4QjPb-Wrvb4dGgIwR2I_uQiKZgZSU4YLrE-a0JH_OPpsb2pILZ6sbg-waxGEvicRlPe5gJ21IYeZx=w71-h100-no?authuser=0'
denis.top = 'https://lh3.googleusercontent.com/9Q6FpTPFJa2NnKheef_O8F9MskZNzkoVRiIKsgxflGQX8scydc7d2NQpVVutlqZpLO5jktIvj9bWV_KEhWvKYgG-bAaoyQ6lP1WAfhq-0z9td3_BoOPgypUdrU-SsQYMiFvkzLWjXmh4bOGbNSpvtNXgW3aRAUEFrHxjLDsa0iJvF_S9ySBW4JMhJ8k-N9yNHFdHos-BDhxOrI2zPFRM39Ygsojw2tgXwyOohzJdH1BtiLtNdJUuK_24-jnTeYPskfaeKluHPWgHGBTmoQ0cBylSVTAZwoRtN3VDU15fUQP-udLiKrdm1K34wiW67hWnzfJaGp_Cwogq6x4y2K3oh7ROZ1dtdfn1aiILaY38ONGxIY2TF5VDbGUbT6kbnhqVnslMSo0_hFvLXQWcJhsGb-G6zX_HVlUqzDzwCixbEz0ujIum3Wzdzjofl1fJixRv3N-ljIMeUaIpfXbKednnsgOd2hln_L0z8j04RI-HoUw1eqfn9_UcqWXtFFcdazK8QVLPYT1BAI7u4Fkqla7qX4b5qbkTu1sLlSuKwFHzjkwtyjRtmey4OWdQFQPq7CzkII8zC1Gdtpn9FNMEg3ZLrtIi2Ho4s1--GjwrY9_IyBiTM7MMpMadIIyQ0OzJxkQ6S9ke9nLPdG7GrNurEx10oNH-Kd45hOFrpouu4R4UePX60wz8njLpa9cX-V0v=s100-no?authuser=0'
denis.profile = 'https://lh3.googleusercontent.com/CWc0RLoqyBPNM7nDnL9Wtbt3CIUrc6mSWnLvRoysLw36I24t--iCq3D2QAqKIgh9EPxdWRPMjtA1GAbm9wCX_f2ZCbhjKfY0EEaChpgfnEhHDp92GwvgdDChPw22zDwfe7mS455H8A4Ijs3lEqACPB4fjrKUu_hrw_RmaGAyIVm5WPyjekktag_LRFJ20S0qqjgA0qTmcNy-_lnRr06xby3R9U7-0yzLXy9hhlj2WNlStoE7gaK_lGKKyZ1vrUCxdBUP1h55Uvyu2IhfBi14iSlLgi9fGgtlY_s-Ys3cTrvMRFtM5Ltv9tzhHy-refBgFRti4WNKgoF4QTVv2oeHAiBxSsSjNrV5P5Ib9nUyZpwm1WHrr2HSc1mTSnmkyPSY3DtnZI9frg3wlcd4Pj0MXpq1cktKlwZXpqq3M-yVChzpdT8zRjtnDFbb2LkVbQyZygKWibT1maKyuhUmtCmm1uplPJgNNqwcfW3_TujBjI8-lx__v2PElw7nvX7YM_ZuavZ8shtHDaaozOQwNBKCJbs7kodhsy0fB6TqwFNGv-oPowPSNnoWiPyia2Lfi7vq0gMB04-sccqNAaFMmm0Moe1f9jrinJ5BSf6Ot-7sp6T4V66sGYGCSz4yznrmPHTkaxQ7liyR3qvQX-XryJnocfFTbuROVkzAqQdswpatSCUyquD92mH3LGt0C6Nv=w372-h430-no?authuser=0';
allison.right = 'https://lh3.googleusercontent.com/bua6gII0kDpfgTPGVPn-dv3RpJFTJ9TkT7mR0yWG-iVi7AZRcRYG1L-ci3E0AtVeMupPFycwSmL5z2RG-Y6M6zZcHLH7ut5IQGZVGAbFuoIo3WwEiVidTMwCjQ3WESL9zuKT9snjEuWNipFlki-3mmpsYnHNpI57j06RezEedDeQyGcW7vdTj51p4skPumB4EQAW5lRA8i-WMq43Y-pSeh0kb_UKN2_8HaEl8ExpjSHZ76Gf1JTRiwHDLIQFbC1WgAMMM8A6MEB3m0Ml3uzdhf5pqgCIWLyOsaKugVCRexHKWH-Z5jfQ6Jq41Lh2RP2OOQHFO-_jfm9ivELLBJA7mBbX3G1QRKtIfRswmwmXkI4ILYBXpChy-VJEOamtBXkzxMV8b4fCNag5orxB3bstR-5WUaJgdM3fA9xEX8xT6IqVGnUbAiSDTb8BqQDnLAXdoNiLAIvknEgHxyrMcB20CZOAQ8TMlA0anYoQGqX3BilinTeT6fp3cTj2KXbr0Fqss6SnGC7BcE4JHRo6fiZg2ii-uDZOYg_j-M3bpli-jxm62XEi1p9SKYdeEvVPWmW0aRUsE_9Q-raJ-ZCKTtp-2Pzn75XVCLjiklGnitQxv0Dzb2zEOeHaWsdvJ2QFiITKA1gCVRLkV9JHIu6H52Qouku3cA7X3ZE5Nq2X7A2oTLLR3TcmNY4Gg-h8TDGa=s100-no?authuser=0'
allison.left = 'https://lh3.googleusercontent.com/ojNXCvic_rfmIDJUepFDvIku6-1udZu2mi5kmyuGAqmU8RU_oRqzfCp31PjMii-WWA7mwLeCRCo2FrYyOiZSnlTUqwmA3Lzq7tmTMnJSeNwoRxrdXpJG704v0qKSSl2MbV-vr0X305k9PUNCMQ0oT1Gyt_LdZXzYKqpCCSWH-IKuhBiEUd7vY3gpnrydx2CbO3FjoxK4hW00qATPbHRmBRMX_52XfCZ-38mmWNwBs5N3zwUxTRWM0_Vh19O4HmtsGBiBsnpInIbWYYzWuROIIRWGtnTbIqEpEfrTbN4DAk4UJUzhCLmrgKIRiNXh9o6qlgW9EpOIhm5csptSQuP0H0aLOSQZdytHI25X13bOkUuyhaIygPcerDevDHOJSo7ux9Xe2M451NoW1jQwYWjmniwmR-oyQUXlGhW5zThajgmM0YeopSwthYbWmHfB8QN02r1UDJ0Roy687QF0Nd1erHaBdBfIDgamp2Zy_v_OCA0gmvz8nRahNY52xAvHso47bYFA2tDei_zRyLnIwFnV3QeBX3iq7eoLOhme7fGOrsVQ-cyi0l-Yi0VnmDU0i-B1j_zW8XvPzbu3UmCt8UuxvCpoZeqEkkrYkIeuoxxk0V4nhkDV-UBewJb2F6uG7e3RCQfXOfZP38fQUbF2ea0EJVZGC4ozyhoMjPWLblKr975U_hnzjn46SGNvOc2i=s100-no?authuser=0'
allison.bottom = 'https://lh3.googleusercontent.com/1eYG-2NWWhdzseyQsuXGrIKtSLgPnjtOapvxpvKInrU5k6wqqaLWQ8grn2VdhDI603sIkkbAzqoY12ud4nlKDqpGPRGOEMbbcezLImXc9zEASn1_OBW7jF85GlHkzK727DST6eB31t2fZvdmNcJXHgRvdt5T5ETtM4BSbkHXSzv86Ne5tbQhzgWZU7SCsnDt2EN7KxH2QKe9MevO1h5kqTanPdQaXs2D7CdriAtlO8CkjU4jd_ecM0meoWzDG255-Y6QV6mnrsQMU2vofssQBP_G2IxaCITG6bm6A_DRLfDGVAyLjrSLLac45x20FHvh4NAPErlSHpDJGeNd4FliMQZk5HVPcMyeIrEiqf-92xdagTFW2rY3-VL6hDSJgW0XACx24l6l_PL6_TRYcc9eTtIXVI8NM-yhrftmNIoqZxDi-X4vO2AW5XhyhH3PUnRsV7v1NvJSlmePoc3ncuEHEEYQd7gLasGNMPsw5ZcOMtqb15mq5gGbKnF_9iG-mvy_Chwr9bOqz9MLK3-jlW8BEOkKZc0wFD_yLt74sOr65x6SK1hUS03kkiRUoJEPiUP9taCT_Sxg-ZpVlu1byyxAXdVS2vap0O-p8ZWtfMLEgPGHknOlWRmQxLGFqe4eCSuWnTrdDPx_-Yw1Gr4f5MjIBk02rLxSOfXsIfrxcoIDraT8oBJnvf4GsctI5Bpm=s100-no?authuser=0'
allison.top = 'https://lh3.googleusercontent.com/Q9sun5MdaOaUgq4_1kXiHpDnTVZXG21tng0FQIidWp6X4Scq1zohA3bnqWNRq0GT13YG3TpqH6SoU3pMOIOQkynriarjoeFqFb8ApIxcE4K3KcFNM9-vAmFhiyniKXcqHdgCc8nbGA04Soz12VHYBv3YShLEslSuw2xSexxBVZ_gAQHPOaF6PSaaRZaqKhgdH0iS4_dl_8SCJS5Sxsx0_2TI31dFSlHOFNrJNTWXYIxiu5h6ulTOV3NY4dIbhGvqXvaoUd2rfUs69ZbPaRR-tpxmGADpRJTCmmowyPiUty0T_jdx5vRyR9hTRxVbF8yAxGc68oY9IHRa-ITxcKfpgaKxf2-UB4H8cy2xqeZo0s6tnrg_tzcXr6y8aKHRpYtPcvsrHG8bDHG24AfLTqotmGuXwQwdyeEToLsaqOROEFC-ZhiqQKOD7INThgPSkFp8FkCJmvVVLFshTTf9wXZNkUnZyEi6bqve0GI9lD933I6nedpGpLgfbLWdLCmq_m8UttKXrQPyisL5a51MuyNjfjpWuNTs9n1TLmSx1hzJ-IYdI_rmAxrnF9sTu1hLnY7F3jD8xcxWbzmub14o4xXgUbRvmSnqI0ms2hxkl2hE89bCU07bOoSjTuEqWR4dpWgmGm-aHEFNZVX7_JU_rtwLj_tyl7EvgVSij9AzyQG0PwDRsksEDRdMxx2XexEt=s100-no?authuser=0'
allison.profile = 'https://lh3.googleusercontent.com/ZeQg1rj30xiSll9yDF_7gY92C2iNEtcmMdjjpLKNnbdOYJzBrlW0anDAD05_Ov3sNBJTPF3UUMckHj1xZy4c3HSOvfGqzv1h7y8X2-jx8kOsvmHx7byhy56BB3xwGWWnlmMLTRvj8iO8cOkyESaVCe_Sjarwr3vs21iRUhyXVmxoFgZQ3f7uahuY5laBrUFJPgBBq5tQ5G6kNmVROrXauWzkPY_JWvI-3VLy2J-KZorS_ov5Aih8Mz2r7EdlsOd_wtpU98BNHN-NCsIx2Q1w0kAeTnuY7uY5qO7ysnguWmH2bjXU77XiqEtl8jZ5xrruJXm5aEHKZdgIU9zWlTsZdVL-prZScHdmVN64RhMErEQ4cvKzaMIRJS89spDTqCRIEPD4-qIVEOucPsmL6TGzf28TwRyX6sYUdSRhfGPwKUsGHsYTyIPAfTfPRiInoZ3Nl5L2q6xU6Bf41T-QIjl3ve0xusdG8cj3nZRUgbn4Zdhu4ET4YyMarabTwKNFxlFcNtvIO-4n3xOZCjyuqjCJ4NXkHnSRwApv1yC79ni-PVZd7Yyqd-LzqWimPbSm2yg2XWMXugEpPP20OhaGDCYY1gBuA7i5fci-rg9FENCDaZX1KjGTURL04_hSvPgxbVTaKveZ8SYJ_NRGVWduVXfLBsNFoNDumtV3CEAdWBKm0SERIjH5FJy7e2whm1MX=w199-h244-no?authuser=0';

duygu.bio = "I am Turkish and grew up in Ankara. I've been living in NY for the past 5 years, but I try to go home at least once a year! I used to work at an Embassy in Turkey, and in New York, I worked as a fundraiser at an international non-profit that does conflict resolution. My job was to organize all sorts of events like galas, talks etc. and raise money from individual and corporate donors for the organization.<br><br> I got into coding because I love that learning never ends! I hope to make a successful career change into tech, and hopefully work as a Software Engineer.<br><br> Dogs. Working out. Wearing yoga pants to formal occasions. Dogs. Baking. Puzzles. Meeting new people. Making lists. Even though I have a license from both Turkey and the US, I have not driven a car in over 10 years. I hate driving and the last time I drove I actually hit a bus that was in full stop.<br> My favorite thing about Codesmith is the people! The support and sincerity of everyone from the team to residents is so unique and so valuable. Throughout your journey, you know everyone at Codesmith is rooting for you!<br><br> I'm most excited to witness the incredible transformation each resident at Codesmith goes through, and help them throughout this process. Learning in this field never ends, and I'm looking forward to improving myself as an engineer and learning more from the rest of the team!<br><br> Be patient. Be easy on yourself. This is not an easy program, and you're not expected to know/understand everything. It's okay to not know. Everyone is here to support you. Take care of yourself. Take it day by day!<br><br>My secret superhero identity is Wonder Woman; not only was I blessed with Amazonian strength and unparalleled beauty, I possess an uncanny abillity to smell dog poop from two kilometers away. This has assisted me in facilitating many creative and daring escapes, as I will very gingerly but cleverly fling dog and/or cat feces in the direction of my enemies and disarm them with one swift odorous move."
keiran.bio = "I'm born and raised in Queens, New York.<br><br> What were you doing before Codesmith? I recently graduated from college (May '19) where I studied Chemistry and Physics. After graduation I worked in a theory/experimental lab at Columbia, while debating applying to PhD programs. Ultimately, I decided against doing a PhD (at least for now I guess), found myself at Codesmith, and am so excited and happy to be a part of the community.<br><br> I find the process of coding/web development really fun and entertaining, so I would love to work as a software engineer upon finishing Codesmith. I also have a lot of various passions ranging from the physical sciences and math to east asian religions/languages and education. In some form, I would love to find a way to implement my future coding skills to my many interests as well.<br><br>In high school and college, I played a lot of competitive Ultimate Frisbee which occupied a lot of my free time. Additionally, I love backpacking/hiking, playing basketball, playing chess, listening to music (I have a very eclectic taste), dancing, cooking, and reading about science/math. Lastly, I really love people and having a great time with friends, so I'm excited to join the Codesmith community!<br><br>I am actually mildly allergic to the sun lol.<br><br>My favorite thing about Codesmith is by far and away the community. At the end of the residency, it’s common for people to feel like they not only grew as an engineer but as a person, which only happens in environments built upon trust and enjoyment. I truly ended the program, walking away with life-long friends and I hope to help cultivate the same culture among new cohorts.<br><br>I love bringing out the best in others and helping craft a person’s narrative. Codesmith’s philosophy of teaching and uplifting each other helped me tremendously and renewed a lot of self-confidence. I hope to do the same for all the residents whom I will have the pleasure working with.<br><br>My main tip centers around a quote from one of my fellows Ben Mizel: “If you want to go fast go alone, if you want to go far go together”. Victories are sweetened and failures are softened when done together. Be generous with your time and devotion to uplifting others and you’ll grow so much as a person.<br><br>My secret identity was recently revealed to be Superman. I like to take icy cold swims in the north pole and vaporize icebergs in my free time. I also like to utilize my super vision to see through all layers of the earth and watch people walking upside down on the other side of the planet. I also like bathe in hot springs and religiously maintain a careful manicure/pedicure schedule."
denis.bio = "I studied business administration back in Ukraine, worked in e - commerce for about 2 years and then moved to the US where I ended up in the restaurant industry. It’s been five years of me working at Veselka - one of the most famous restaurants in the village! The place is open 24 / 7 so we’ve got our portion of fun over there.<br><br>It would be really fun to build my own project. Not just a portfolio app that nobody needs, but something actually useful to others. I am not sure what it would be yet, but I’m sure I’ll come up with an awesome idea. I also feel responsible to “give back” by making a difference in the industry. Making it easier for others to become software engineers (move further away from “experience / education” paradigm).<br><br>Just like other kids of my generation I started playing computer games when I was 10. And I have to admit I still do. Loving games made me love computers, it made me understand them.I love building / overclocking / tweaking PCs or just building part lists for others. I also love swimming! Not professionally, but I do swim at least twice a week. Here I have to say that I love reading! And I do, though I barely read anymore (shaaaame). My favorite genre is sci - fi, one of my favorite books is the “Riverworld” series by Philip José Farmer.<br><br>My first language is Russian. I got really good at frisbee during this quarantine! When I was 11 I managed to skip a full year of swimming classes(3 times a week) hiding in the library reading Harry Potter, Sherlock Holmes, etc.My parents found out on May 31(last day of school) because..they met my teacher on a bus stop! I take such random events into account when I lie ever since. <br><br>My favorite part about codesmith is the atmosphere, which is probably what 99 % of people say, but it’s so true though! I never felt so welcome, it’s basically a second home.<br><br>The thing I’m excited the most about fellowship is the approach lectures! Sometimes things just don’t make sense... I can't wait to help students understand complicated concepts with super simple to follow analogies.<br><br>Advice to the new students: it’s not about talent, it’s about time and hours you put in. And remember, you are not meant to learn 'React' in two days. You are meant to learn it in 90 days, keep that in mind, it will all click.<br><br>I tried to maintain my secret identity for a long time, but the truth was recently revealed in a very controversial but profound interview I gave last month. At night, I don the mask and cape of Batman and like to do wheelies in my Batmobile in the parking lot of Walmart or Costco. I'll often do my groceries after I do my wheelies so my fruits and veggies don't get too squashed. My suit is often hot and itchy, but there's no way to relieve sweat or itchiness in my suit."
joju.bio = "I was born in Nigeria and raised since the age of five in Maplewood, New Jersey. I always find it difficult to answer this question. I introduce myself as from the US to those outside of the states and I from Nigeria to those in the states. So I'm perhaps a healthy mix of both.<br><br>I graduated undergrad in 2017 and lived in China for two years as an ESL teacher. Honestly this was an amazing experience that taught me how to meet and understand people of a totally different culture and how to be patient. I came back to the states at the end of 2019 and, being unemployed, have had the opportunity to explore software engineering while self studying. <br><br> Wow, I feel like I want to do a lot with my coding skills. There are two main overarching themes though: fun with and make a positive difference in my community with code.Whether that means working for a language acquisition app(my dream), or diving more into robotics(so cool!!!) as long as it falls under those goals I am down.<br><br>I have a lot of hobbies, haha. I like to read, cook, bake, play the ukulele(terribly albeit), and draw. Right now my main passion has been language learning. I started learning Mandarin before I was in China and am still currently being tutored every week so that has been very enjoyable. Random factoid, I used to be a cheerleader in middle school.Being a cheerleader was honestly a really great experience and helped me back then make friends and bolster my confidence.Most people are really shocked when I tell them this so I love to mention it.<br><br>My favorite thing about Codesmith would have to be hands down the community.It has pushed me to continue to grow, ask questions, and become a more confident version of myself.<br><br>I honestly had a great experience with my own Fellows so can’t wait to help others have the same ‘aha’ moment I’ve had during APC’s, approach lectures, or hack hour strategies.<br><br>My biggest tip for new students is to build a strong learning community. It will get rough at certain portions of the program and you aren’t expected to grasp everything the first time around. This is where the community comes in. Get to know the members in your cohort.Take a break with them, talk about your struggles, ask for help when needed, provide help if you can, host study groups, karaoke nights, etc. This will help you so much not only during the program but after graduation as well.<br><br>My secret identity as the Black Widow has often endangered my insect friends. They think that I'm out to eat them, and it's difficult to communicate with the insect world that my moniker is not literal. I've never actually bitten anyone. I do like to pretend I have eight arms, since I admire the Hindu goddess Durga, who is a similarly fierce warrior goddess and is often depicted in art riding on a lion or tiger. It's often quite hard as a spider to ride a lion or tiger, for fear of being eaten or trampled on."
zac.bio = "Where do you consider yourself from? I grew up in New Jersey (the Jersey Shore, to be specific, but I try to avoid saying that now), but I've spent the most recent two-fifths of my life between the US and Asia. I went to college upstate at Hamilton, which is near Utica and always snowing. After college I spent 7 years in China, where I worked as a translator. I mostly lived in and near Shanghai, but I had the chance to spend a few winters in the far northeast, where my wife is from.<br><br>After college I worked a lot of different jobs, ranging from technical writing to video editing and motion design, but Chinese-English translation is what I've done the longest (5 years) and what I'm the proudest of. I started out translating art criticism essays and had the chance to translate several full-length books before moving back to the US. A couple of years ago I translated a thriller that was published in the US and abroad and also featured in the NYT and a few other publications, which was really cool. As far as coding goes, I started teaching myself front-end development last March. After applying to a lot of different junior positions at the end of last year, I realized that certain gaps in my skills and experience were holding me back — that's what drew me to Codesmith. What do you want to do with your coding skills? Short answer: Start a solid career that will let me support my family now and in the future. Longer answer: Become a well-rounded full-stack developer and find a team that will give me the opportunity to grow while also applying my skills as a coder and a creative individual. Codesmith stood out to me because I already had a decent foundation as a self-taught developer but didn't feel fully confident when it came to areas like algorithms, Redux, and back-end development. I'm looking forward to becoming a better all-around developer through this program along with my fellow residents.<br><br>My top passion is definitely music. I've played the guitar and drums off and on for the last decade or so. In my spare time I record metal and bad synthwave music on my computer. Over the last few weeks I've been listening to a lot of Architectsand old Blink-182. I used to love writing fiction (I was one writing class short of a Chinese/creative writing double major incollege), so I'm hoping to get back into the habit once I've found a job post-Codesmith. In the meantime, I'll be listening toaudiobooks on my way to and from class!<br><br>Ever since coming to my first workshop (How to Get Hired), my favorite thing about Codesmith has been the community. Whether I was interacting with the instructors, the fellows, or the residents, I’ve always felt welcome here, and I owe a huge part of my growth as an engineer to Codesmith.<br><br>As weird as it sounds, I’m psyched to go through the Codesmith curriculum all over again. Helping all the juniors andseniors along in their own engineering journeys is going to be a blast, and I’m looking forward to sharing my own insightsfrom my time as a resident.<br><br>If you’re still having trouble grasping a concept after a unit (for me it was Redux and PostgreSQL in particular), build a tinyapp that uses that technology. Make it as simple as possible. For instance, if you’re stuck on databases, create a super-small database with some fake names and email addresses,then build an app that displays this user info and lets you add and update it. Another super-helpful tip if you’re stuck: go through the unit again in your spare time. A lot of things will click in place thesecond time around.<br><br>I resent that Chris Evans was selected to play me in the Marvel series, as I am much more handsome and in shape than he is. In real life, I've seen him on the streets of LA, and he's definitely not as cute as he seems on the big screen. Who wouldn't look that bedazzling on such a large screen?"
keriann.bio = "I was born, raised, and currently live in Queens, NY. I had a short stint in Connecticut(for school) and Florida(for a work / study program with Disney) but I’ll always have a soft spot for my home city, NYC. I’m so thankful for my amazing support system here where most of my family and friends are just a few train stops or a quick drive away.<br><br>I was a flight attendant for United Airlines and then traded in my wings to join NewYork - Presbyterian Hospital, where I was most recently a Business Analyst on the Project Management HR team. I’m really enthusiastic about technology and just figuring stuff out in general so I took any chance I could get to collaborate with the tech team during my time at NYP.I’m extremely grateful for the opportunities I’ve had and my career has been a constant cycle of learning and researching, which I hope will continue no matter where I go.<br></br>To start with, I want to collaborate with amazing engineering friends in the cohort and in life, and start my career in the field so I can spend my days creating and learning.It’s not even a question whether or not technology is important nowadays - you can create great solutions with programs and I want to be a part of that.I’d love to work for a company and with a team that creates products that reach a large audience and positively impacts them — however, I want to also spend my free time working on a passion project, most likely a game that’s both fun and educational.<br><br>I love doing outdoorsy activities - depending on the season, I'll go hiking or snowboarding, or I’ll simply take a walk to soak in the sun. When it’s a stay - at - home kind of day, I enjoy playing video games(primarily RPGs - I’m very plot - driven) and I’ve recently started incorporating yoga and meditation into my daily routine.<br><br>I really love animals - a true 'crazy cat lady' in the making.Happy story: three mama cats gave birth to a total of twelve kittens in my backyard. My partner and I managed to find homes for each of them through close friends and trustworthy acquaintances. We decided to temporarily foster the littlest one because he needed some extra TLC - it’s now been three years since we ended up permanently taking in that kitten and his mom as our own! Bonus story: I was kicked by a kangaroo in Australia when I was a kid.I’m pretty sure I have a picture of the culprit and I’m definitely, absolutely not holding a grudge nor am I planning my revenge because I totally love all animals equally (seriously!).<br><br> Hands - down, my favorite thing is the supportive and close - knit community. Over a span of 12 weeks you’re challenged every day and face countless moments of self - doubt. At the same time, you naturally build these solid friendships that carry you through these rough patches and strengthen your learning as an engineer and also as a human being. You can’t beat friendship!<br><br>Connecting with the residents and seeing what amazing engineers they’ll become. I’m excited for those moments of support when they encounter seemingly unbreakable walls, being that someone to talk to candidly or bounce ideas off of as they struggle, and then finally, cheering with them when they make that major breakthrough and start creating awesome things on their own.I’m lucky to be a part of this life - changing adventure!<br><br>Don’t be afraid to ask questions to your cohort mates, seniors, fellows, or instructors.It’s okay to not know something. I don’t know many things! The beauty of Codesmith is that you’re embarking on this journey with others - we want to do the hard learning with you. Take advantage of that!<br><br>I try to usually lay low, but I like to fly high as well, as my secret identity is Storm. I don't love being a mutant, as my hair tends to fall out in random places even though I don't suffer from any autoimmune diseases like alopecia. My brother has alopecia, and it's incredibly unfortunate. I like to manipulate the wind to blow farts and burps away from my, as I have a very sensitive sense of smell and I despise being caught downwind (upwind?) of disgusting stenches. That's why I stay away from landfills."
allison.bio = "I grew up in Connecticut, in pretty much the middle of nowhere. It was inconvenient, but I had foxes living in my yard, which was cool. I later lived in a few other places throughout the state, and then I moved to New York in 2016.<br><br>I proofread for the legal division of a translation company, Lionbridge. Prior tothat, I worked in academic publishing. I was an assistant editor for clinical medicine books, mostly psychiatry, at Oxford University Press. <br><br> On a very general level, I want to find a way to combine coding with my other passions. I have a serious interest in wildlife conservation, ecology, and plenty of other things related, so it goes without saying that I’d love to build software that’s useful to these fields. But I have yet to figure out how!<br><br>Somewhat related to the previous answer, I think animals are fascinating and have been involved with wildlife rehabilitation for the past few years. I fell into the whole thing kind of unexpectedly and on a whim, but now it’s asignificant part of my life. I volunteer at a clinic that treats mostly birds, and after having spent many hours working with these feathered dinosaur-creatures, I’ve really come to appreciate them. Ask me about swans sometime! Other things Ienjoy include biking, wandering around my neighborhood, and drinking tea.<br><br>I can pick locks. I never disclose this fact to roommates, but they all inevitably find out when they end up locking themselves out of their rooms and I need to break them in. It always happens.<br><br>The supportive community here (and the amount of collective enthusiasm that exists within it) is unbeatable. It's a difficult program, but you're going through it with a bunch of awesome people who a) understand what you're facing and b) also enjoy overcoming challenges. To me, this is what truly makes the experience what it is.<br><br>I'm excited to effectively go through this program again with the perspective of having already done it once and help residents understand concepts that I once struggled with! To me, one of the most satisfying things is that moment when something difficult finally clicks, and I'm excited to see that happen over and over again for all of you!<br><br>The collaborative aspect of this program can't be understated, so make the most of it! When you understand someconcept, focus on helping others and making sure they do as well! Strive to grow interpersonally as well as technically!<br><br>As Jean Grey, I honestly preferred being called Marvel Girl before the whole Phoenix re-brand. Professor Dumbledore owns a phoenix, and I refused to be owned by a decrepit, old man. Sorry, I didn't mean that. I love Professor Dumbledore, may he rest in peace. My insane telekinetic power and my complex relationships with Cyclops and Wolverine tend to stress me out. It can all be a bit much. But I love my life. I'm strong, beautiful, powerful, sexy as hell and in control of my own destiny. I am also an Omega-level mutant, and unlike most measly humans, I was able to defeat even Galactus when my highest and strongest potential was fully merged with the Phoenix Force. Boom shaka laka!"

// REPLACEMENT TEXT
function replaceText() {
  let currentText = document.createElement('p')
  document.querySelectorAll('p')[0].innerHTML = ''
  document.querySelectorAll('p')[1].innerHTML = ''
  document.querySelectorAll('p')[2].innerHTML = ''
  document.querySelectorAll('p')[3].innerHTML = ''
  document.querySelectorAll('p')[4].innerHTML = ''
  document.querySelectorAll('p')[4].appendChild(currentText);
  // let currentText = document.querySelectorAll('p')[1]; 
  // document.querySelectorAll('p')[2].innerHTML = ''
  // document.querySelectorAll('p')[3].innerHTML = ''
  currentText.innerHTML = selectedFellow.bio; 
  currentText.style = "display: block"
  document.querySelector('.hatnote').innerHTML = ''
}

// array of objects
let newFellowArr = [duygu, keiran, denis, joju, zac, keriann, allison];
// after randomizing (fellowInt is random #)
let selectedFellow = newFellowArr[fellowInt];
console.log("selectedFellow: ", selectedFellow.name);

// ========================================
// At this point, we have a fellow, selected at random
// ========================================


// elements that don't have multiples
let infobox = document.querySelector('.infobox').getBoundingClientRect(); // universal
let plainlist = document.querySelector('.mbox-small').getBoundingClientRect(); // universal
let catlinks = document.querySelector('#catlinks').getBoundingClientRect(); // got rid of it
let toc = document.querySelector('.toc').getBoundingClientRect(); // universal
// let simpleSearch = document.querySelector('#simpleSearch').getBoundingClientRect();

// ========================================
// Potential issue with below: querySelectorAll?
// ========================================

// elements that have multiple instances
let thumbObj = document.querySelectorAll('.thumbinner');
let thumbInt = randomizer(thumbObj.length);
let thumbRandom = thumbObj[thumbInt].getBoundingClientRect(); 
// console.log("!!!thumbinnerInt:", thumbinnerInt)
// console.log("!!!thumbinnerObj:", thumbinnerObj)
// console.log('thumbinnerRandom: ', thumbinnerRandom);

let wikitableObj;
let wikitableInt;
let wikitableRandom;
if (!document.querySelector('.wikitable')) {
  wikitableObj = document.querySelector('.thumbinner');
  wikitableRandom = wikitableObj.getBoundingClientRect();
} else {
  wikitableObj = document.querySelectorAll('.wikitable');
  wikitableInt = randomizer(wikitableObj.length);
  wikitableRandom = wikitableObj[wikitableInt].getBoundingClientRect();
}
console.log('wikitableObj:', wikitableObj)
// if (!wikitableObj) wikitableObj = document.querySelector("div").getBoundingClientRect();;
// let wikitableRandom = wikitableObj[wikitableInt].getBoundingClientRect();
// console.log("!!!wikitableObj:", wikitableObj)
// console.log("!!!wikitableObj0:", wikitableObj[0])
// console.log("!!!wikitableObj1:", wikitableObj[1])
// console.log("!!!wikitableObj2:", wikitableObj[2])
// console.log("!!!wikitableObj3:", wikitableObj[3])
// console.log("!!!wikitableObj4:", wikitableObj[4])
// console.log("!!!wikitableObj5:", wikitableObj[5])
// console.log('wikitableRandom: ', wikitableRandom);

// ===================================================
// BELOW I REPLACED CATLINKS WITH ANOTHER THUMBRANDOM
// ===================================================

// final array to pick a random element from:
let elementArr = [infobox, plainlist, thumbRandom, toc, thumbRandom, wikitableRandom];
let elementInt = randomizer(elementArr.length);
let elementRandom = elementArr[elementInt]; // selection
console.log('elementRandom', elementRandom)
if (!elementRandom) elementRandom = document.querySelector("div").getBoundingClientRect();;
// console.log("elementArr: ", elementArr)
// console.log("elementInt: ", elementInt)
console.log("REFERENCE: 0=infobox, 1=plainlist, 2=catlinks, 3=toc, 4=thumb, 5=wikitableRandom")
console.log("TABLE SELECTION: ", elementInt)
console.log("This should be where the element is: ", elementRandom)

// ==================================================================
// At this point, should have determined which table we are selecting
// ==================================================================

// choose random side
let sideInt = randomizer(4);
let sideArr = [elementRandom.top, elementRandom.left, elementRandom.right, elementRandom.bottom];
let sideRandom = sideArr[sideInt];
// console.log("sideInt:", sideInt)
// console.log("sideArr:", sideArr) 
console.log("Direction: ", sideInt)
console.log("Guide: 0=top, 1=left, 2=right, 3=bottom")

let finalTop = elementRandom.top;
let finalLeft = elementRandom.left;
// let finalRight = elementRandom.right;
// let finalBottom = elementRandom.bottom;
console.log("Top before final", finalTop)
console.log("Left before final ", finalLeft)
// console.log("finalRight: ", finalRight)
// console.log("finalBottom: ", finalBottom)


// adjust final position depending on which side is randomly selected
// console.log("left true or false:", sideRandom === elementRandom.left);
if (sideRandom === elementRandom.left) {
  finalLeft -= 45;// -= 45
}
// console.log("right true or false:", sideRandom === elementRandom.right);
if (sideRandom === elementRandom.right) {
  finalLeft += elementRandom.width - 5;
}
// console.log("top true or false:", sideRandom === elementRandom.top);
if (sideRandom === elementRandom.top) {
  finalTop -= 45;// -= 45
}
// console.log("bottom true or false:", sideRandom === elementRandom.bottom);
if (sideRandom === elementRandom.bottom) {
  finalTop += elementRandom.height - 5;
}

console.log("Final Top Position: ", finalTop)
console.log("Final Left Position: ", finalLeft)
// console.log("finalRight after move: ", finalRight)
// console.log("finalBottom after move: ", finalBottom)

// ====================================================================
// At this point, should have the coordinates for the eventual position
// ====================================================================


// CREATING THE WALDO
let waldoBtn = document.createElement('button'); // create button
document.body.appendChild(waldoBtn); // attach to body
// assign ID and dynamic position
waldoBtn.innerHTML = '<img id="waldo" style="left:' + finalLeft + 'px; top:' + finalTop + 'px;"/>';

// DETERMINE WHAT IMAGE / DIRECTION
// console.log("left true or false:", sideRandom === elementRandom.left);
if (sideRandom === elementRandom.left) {
  document.getElementById('waldo').src = selectedFellow.left; // assign image
}
// console.log("right true or false:", sideRandom === elementRandom.right);
if (sideRandom === elementRandom.right) {
  document.getElementById('waldo').src = selectedFellow.right; // assign image
}
// console.log("top true or false:", sideRandom === elementRandom.top);
if (sideRandom === elementRandom.top) {
  document.getElementById('waldo').src = selectedFellow.top; // assign image
}
// console.log("bottom true or false:", sideRandom === elementRandom.bottom);
if (sideRandom === elementRandom.bottom) {
  document.getElementById('waldo').src = selectedFellow.bottom; // assign image
}

//====================
// CLICK FUNCTIONALITY
//====================

waldoBtn.addEventListener('click', clickWaldo)

// CLICK WALDO FUNCTION START
function clickWaldo() {
  console.log('you clicked me');
  // alert(`You've found me!`);

  // change content bg to white
  document.getElementById('content').style = "background-color: white !important"
  
  // change id=firstHeading and class of fn to say the name
  document.getElementById('firstHeading').innerHTML = selectedFellow.name;
  document.querySelector('.fn').innerHTML = selectedFellow.name;

  // remove waldoButton once user finds & clicks it
  waldoBtn.innerHTML ='';
  
  // create fancy dialog button
  let dialog = document.createElement('form');
  document.body.appendChild(dialog);
  dialog.innerHTML = '<input type="button" id="dialog" onClick="history.go(0)" value="Play again?" />'
  // dialog.style.backgroundImage = `url('${selectedFellow.profile}')`
  
  // play found me sound
  // playSound();
  // function playSound() {
  //   const gameOver = document.querySelector(`audio[data-key]="gameOver"`); //ERROR
  //   gameOver.currentTime = 0;
  //   gameOver.play();
  //   gameOver.autoplay = true;
  //   gameOver.loop = true;
  // }
  
  // replace all other existing iamges
  let imagesToReplace = document.getElementsByTagName('img');
  for (let image of imagesToReplace) {
      image.src = selectedFellow.profile;
      image.style = "object-fit: contain;"
      console.log(image.src);
  }

  replaceText();

  let text = document.getElementsByTagName('*');
  for (let i = 0; i < text.length; i++) {
    let textToReplace1 = 'Bong Joon-Ho';
    let textToReplace2 = 'Bong';
    let textToReplace3 = '봉준호';
    let textToReplace4 = '奉俊昊';
    let textToReplaceWith1 = selectedFellow.name;
    let textToReplaceWith2 = selectedFellow.koreanName;
    let textToReplaceWith2A =selectedFellow.koreanName[0];
    let textToReplaceWith2B =selectedFellow.koreanName[1];
    let textToReplaceWith2C =selectedFellow.koreanName[2];
    let textToReplaceWith3 = selectedFellow.chineseName;
    let textToReplaceWith3A = selectedFellow.chineseName[0];
    let textToReplaceWith3B = selectedFellow.chineseName[1];
    let textToReplaceWith3C = selectedFellow.chineseName[2];
    if (text[i].innerHTML.includes(textToReplace1)) {
      text[i].innerHTML = text[i].innerHTML.replace(/Bong Joon-Ho/gi, textToReplaceWith1)
    }
    if (text[i].innerHTML.includes(textToReplace2)) {
      text[i].innerHTML = text[i].innerHTML.replace(/Bong/gi, textToReplaceWith1)
    }
    if (text[i].innerHTML.includes(textToReplace3)) {
      text[i].innerHTML = text[i].innerHTML.replace(/봉준호/gi, textToReplaceWith2)
      text[i].innerHTML = text[i].innerHTML.replace(/봉/gi, textToReplaceWith2A)
      text[i].innerHTML = text[i].innerHTML.replace(/준/gi, textToReplaceWith2B)
      text[i].innerHTML = text[i].innerHTML.replace(/호/gi, textToReplaceWith2C || '')
    }
    if (text[i].innerHTML.includes(textToReplace4)) {
      text[i].innerHTML = text[i].innerHTML.replace(/奉俊昊/gi, textToReplaceWith3)
      text[i].innerHTML = text[i].innerHTML.replace(/奉/gi, textToReplaceWith3A)
      text[i].innerHTML = text[i].innerHTML.replace(/俊/gi, textToReplaceWith3B)
      text[i].innerHTML = text[i].innerHTML.replace(/昊/gi, textToReplaceWith3C || '')
    }
  }
} 
//========================
// END CLICK FUNCTIONALITY
//========================

// generate random num
function randomizer(max) {
  return Math.floor(Math.random()* max);
}




// let infoboxTop = infobox.top;
// let infoboxLeft = infobox.left - 45;
// let infoboxRight = infobox.right;
// let infoboxBottom = infobox.bottom;

// let infoboxArr = [infoboxTop, infoboxLeft, infoboxRight, infoboxBottom];
// let infoboxSide = infoboxArr[infoBoxInt]

// let waldoBtn = document.createElement('button'); // create button
// document.body.appendChild(waldoBtn); // attach to body
// waldoBtn.innerHTML = '<img id="waldo" style="left:' + infoboxLeft + 'px; top:' + infoboxTop + 'px; right:' + infoboxRight + 'px; bottom:' + infoboxBottom + 'px;"/>'; // img
// document.getElementById('waldo').src = justinLeft; // assign image



// let testCase = document.createElement('img');
// document.body.appendChild(testCase);
// testCase.style = 'position: absolute; left:' +  infoboxLeft + 'px; top:' + infoboxTop + 'px;'
// testCase.src = "https://pbs.twimg.com/profile_images/561277979855056896/4yRcS2Zo_400x400.png"; 
//


// `position-top: ${infoboxTop}; position-left: ${infoboxTop-50}`


// document.getElementById("myImg").src = "hackanm.gif";

// console.log(infoboxTop, infoboxLeft)


