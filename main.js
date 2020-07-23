console.log(document);

let fellowInt = randomizer(7); // update max if we don't do all fellows
let fellowsArr = ['Duygu', 'Kieran', 'Denis', 'Joju', 'Zac', 'Keriann', 'Allison'];

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
  }
}

let duygu = new Person(fellowsArr[0]);
let kieran = new Person(fellowsArr[1]);
let denis = new Person(fellowsArr[2]);
let joju = new Person(fellowsArr[3]);
let zac = new Person(fellowsArr[4]);
let keriann = new Person(fellowsArr[5]);
let allison = new Person(fellowsArr[6]);

duygu.koreanName = '뒤구';
kieran.koreanName = '키어린';
denis.koreanName = '데니스';
joju.koreanName = '조주';
zac.koreanName = '자크';
keriann.koreanName = '케리안';
allison.koreanName = '앨리슨';

duygu.chineseName = '德维古';
kieran.chineseName = '基兰';
denis.chineseName = '丹尼斯';
joju.chineseName = '潮州';
zac.chineseName = '扎克';
keriann.chineseName = '凯里安';
allison.chineseName = '艾莉森';

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
kieran.right = 'https://lh3.googleusercontent.com/2wRRx3V2l3xPiP1Ne4ft1L-RBLSSes56xLdGZcWItMt-pwU5JPMf82ZzYtLHVdAqkooOByg8pma2lTVLSOAgGaoXReAoCNRQybDuDx6GwyX0d3Cz3s69wCagz53fCk8n9sk7G2anK0Cs2YFzxag1x8nn3_mpAvU2RSgD2vL86n5BonhFk9rY_ycCEZWods6LcaOk_xPb4QbLoD7fXRhNcrDlSRA4bf21ufDx7k2-wm5yV-F_nYjLxXAmv87noTw3OBvsFIdawz_yCx-sR-ou9GEUW6E9Vo_D9Xjef8cDoP_D0YEO5hSHmatvn0aPkOLsXBeyRjbFpWOSe1F03Xnp2K8EMeC2G1MvN1SpXdsGYwLvTJMpZsaljhMfA5Ew_CzvUFMWT8uTbe9dekqjdzbv5ymLvcwh-2x3_986-FQKZ728eF81Dq6JulE8jvk0dIDeJNw8J9Fd-Ic_7leMz0APB2NaK-WVx32SPRk-w2NShNUglUwimnU1vn0VawqgRgSQP5kMYEKtMaOIqv48LSyNPI8CXxYLwS4c3YoTjJ53rXY-9vAC-PL0a60fRTQgg9RivPZ1gzq4CTWjBybjTGRTqaEVcBk_PqRrPan0jiZxa1bAybaE9p7XlM5-i4NNqwX6Q_efJdfGSDCAEGlCUcmXyZht6BY2-aHecSySjqJFILJDtyIbDIR9n4EWQ8Tk=s100-no?authuser=0'
kieran.left = 'https://lh3.googleusercontent.com/7nzC4id9WOgGSmOw_rG-wXnAUQRYw4sENnVTVeVUoRtzkN1D8e0pWzwCOnFj7ap8nsNNm9pIM9l2bz91nt5-jz_LzHNBI_eOnI4UnYPj2EAfjOEOjc4JCSA8Y9Mtyai0_i4sh_G345DzEdQ3A3xpZUWqxs9vyj4K6SrkXkgpO1MPR8SR0A2DPXhfcNrM12shAJ5VJ2auo1ZRrBQFRnVOQG9B-EsKZEBRGatOzXPOxd6kng3h7efdEk6TGWm3YVZtWuMmDep4QPhY6XW8Shotkp8aSZGFioOwrBM_r4ds__PM4MFOxAkojxlhppzeoxuI4KwU4TzM8NV8ePXbNc3x9nvJEhIBHYIUIlBDuHragIzBk72_EWVmQw96yBPIZ9anOQzEISxQKEljodV_xcEp_bvNoWmtYQTLvPnQq9c3O_dGgoeFyrPrKQN48tlaCz9g0BM9fkAV1bocCdizlbMSC9qWAfAzvSXycLFK8GgV1mqL5WFKHhtfUUUIy3klHYyOsMVw7PglflxJR6fq-kAp_SQ86uxuJUsq1e4J7pXfxWaDsi8IIGo--nHxrg4x9gjvvinkMVO4YW6wCQb_k2C8dKbyxLpm27yXsdc2O2jUaz1jntREPyFc2jTFX6D8k8a7I2_y7ZAqT3IOdqmKJOaj2noaqXPzLbE1ucEWxfe-zSz_9aEqnGurewVG26Cd=w100-h71-no?authuser=0'
kieran.bottom = 'https://lh3.googleusercontent.com/ooz4eQkvijqmgAV0_DCa-BR0GLOb_9ObYTI2V5HNR083K3L4f9rqm6gZczaV-P0vDvhrrJ3E0tpq1MJq51ThRfDyUeD5Zf2loGRPpwsJyBUJW8bluerIY4aOJf7Emv4q0aCYxjSHiR4WNsSkPy7bIZ2uPzwIzMDqVCPf1zLGu3Zz4V1LcKbGW5_44ik388yYcwoG2tibh4Z-m3izonBPlmfwW8X2do2WpKeE6NAAcUfFxXxh26rh45jDtfgSBPXi5SZ94vSksxVuqDdYzCyjXvS7p-7P8ezwZO0w41bMnSo0vj4ZQoWspfM-w_yq9zyKrtXwBO2tS6ZgNCvBP7ZOu4LFzRQTYndep7mbGI6OQXCVD9sh9ZHCH34TuBAXeVmzhhSQavsb6l5EDp44MUWTL09FU3i-WJ6Y3kkbcDVeFdTmanQzPDf8m3o0TYfPIH7aRvWCGrsWvvrKHpH3irwp2AgtDENgbpHdw_H_fBEV4u5F7g6rd9mkwOPmtaE0PVOYbar-1HRAm84_EQbnqhL2gJAaCrIGbkCzNmC9R1kRXOOz2pUz1bpMaqDNvGGlxcLXyIXVzxvRt35d3Nde-rSqTDh04aryWCZjMBsKKaHEpPRrY82wlb-fvyoEm9hs0f14z_sb60qlwebCMHu5ENwhx36_cJETAESssFubxZ37dP8zY3Tdw6Q4IItm8VQq=w71-h100-no?authuser=0'
kieran.top = 'https://lh3.googleusercontent.com/XAKALaA6uifF90ReN2IGnOvuw_Uw5Pmf0BDbQxgUec4loHBm_LklP02Y2CE4MGskwE71qWM1u5t2iEjzoeZwf85zCB-yof_1UEa116iPJ8zuYSIEr9pEqQdD8EACaKsA_k9iWnmn2l5flsS6rnMxFe83IN9eOx5mrBXfZBgWDQIdCiYC5Hv7ET0S9Wdc7Y5788jg8qqz3qhvrjNeq5ViKaFdUAqlkm-AownqLMM13cj72B5JXRC_ns8qyE1oJeRAn_uOAchGbGGlTWZmc4rj3l488gvimIL6F_SMnBwosBdEZTfPwDM4okoJhvoPevFWYpuqqIo3gZ61qgFhU4v9-drLx7kCGTRz7A6p0SSMdPsf2dqS_9diD2AgIddo-Ns4BYx6-6oNdag7dZqRM54K8wjv4jJmXT_WEvaLmzF84tRdj1TrBoZ3iqjxuWYwGoL4rcQnoOJKuuU8xuHLcSyUX8lmIiBAd-EWZ7fqWa2M_xCjV6ch1RZXHu3ywFDwujEEmSalW_m0VWNfHE1ScRp3obCQXlqLEUHZuT-9w-d2YhBLOwO0NjWzZxt1OWS8wIuXfhNZT3IBKXAJxgKeyUlC74P6S8FwgloEEhDqTLDGDMQSclcvomig9XIJY5Jg9Z66m5T16HhQMdkRwcZaZUUdlc4srz0BdiCP5hmsi-U9DGaUBHwIkjjWHyYpxwRp=s100-no?authuser=0'
kieran.profile = 'https://lh3.googleusercontent.com/2h0Kb7LwIqJ8Ni3rUlzQgO8Llya7ed9iwxysGc5aGUdDT5FeGwECw67XRk54GwK_GByTlvpYMgF1vcT6BJABAbdiR3YdOUSG9qN-wvkx6nrL6SG7ezFQTBy2X_H7RX6WdcCLpA2TWlOg8Npwrp6dOZlUotz-oQMBg2qSHKF2yRfF80FDM7PlxhfjMtBMe9AwKeSXnNUSjteABsM5ZIO2sWm0po4XIvHK7MSI05tJZZbNk2ilm9iclJi-zxfwlxKBeYs13SqJCUuQv5OT9dDz14aTL4EaLjGZOBfkJtQn1ibNild5vg6PA2sv_QE4JKwLtTPLXmxGg5VD0BwXwCw8UGfzgUQNrh1oMbRofG5qOJJgimy8QBdl6CYe4r2M26Kzl-Dej_FUFzqInkm2TN_bRpuJm0QHctjrAzNDVXfU6Ngd41BYMP16XqNBddcuYdb7FJw9X2ljxbjnqG3BNq05ml9s-HgfReW6mY6xYxZjKxzwuM5pHh_gVbWhSIiTMz8YZgUZ9gDhhHmrfrc54Dkpzqef9e9y1XHGU5yUkvXS3Kcvcxx8u0g29V0TpSrwm5wuXppoUeXr1dU4iO_w67YzbO0PHiHkP-WVRcbKfmk0kOwgPrD2v_E8EuYZxJJdiEUS_l2YRN6MSjbAHJDFnf2sNoGAmmCbZNZbmsQnRwvOasSw_R4VixT03WR8p1Py=w358-h376-no?authuser=0';
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

// array of objects
let newFellowArr = [duygu, kieran, denis, joju, zac, keriann, allison];
// after randomizing (fellowInt is random #)
let selectedFellow = newFellowArr[fellowInt];
console.log("selectedFellow: ", selectedFellow.name);

// ========================================
// At this point, we have a fellow, selected at random
// ========================================


// elements that don't have multiples
let infobox = document.querySelector('.infobox').getBoundingClientRect();
let plainlist = document.querySelector('.plainlist').getBoundingClientRect();
let catlinks = document.querySelector('#catlinks').getBoundingClientRect();
let toc = document.querySelector('.toc').getBoundingClientRect();
// let simpleSearch = document.querySelector('#simpleSearch').getBoundingClientRect();

// ========================================
// Potential issue with below: querySelectorAll?
// ========================================

// elements that have multiple instances
let thumbInt = randomizer(3);
let thumbObj = document.querySelectorAll('.thumb');
let thumbRandom = thumbObj[thumbInt].getBoundingClientRect(); 
// console.log("!!!thumbinnerInt:", thumbinnerInt)
// console.log("!!!thumbinnerObj:", thumbinnerObj)
// console.log('thumbinnerRandom: ', thumbinnerRandom);

let wikitableInt = randomizer(6);
let wikitableObj = document.querySelectorAll('.wikitable');
let wikitableRandom = wikitableObj[wikitableInt].getBoundingClientRect();
// console.log("!!!wikitableObj:", wikitableObj)
// console.log("!!!wikitableObj0:", wikitableObj[0])
// console.log("!!!wikitableObj1:", wikitableObj[1])
// console.log("!!!wikitableObj2:", wikitableObj[2])
// console.log("!!!wikitableObj3:", wikitableObj[3])
// console.log("!!!wikitableObj4:", wikitableObj[4])
// console.log("!!!wikitableObj5:", wikitableObj[5])
// console.log('wikitableRandom: ', wikitableRandom);

// final array to pick a random element from:
let elementArr = [infobox, plainlist, catlinks, toc, thumbRandom, wikitableRandom];
let elementInt = randomizer(6);
let elementRandom = elementArr[elementInt]; // selection
// console.log("elementArr: ", elementArr)
// console.log("elementInt: ", elementInt)
console.log("REFERENCE: 0=infobox, 1=plainlist, 2=catlinks, 3=toc, 4=thumb, 5=wikitableRandom")
console.log("TABLE SELECTION: ", elementInt)
console.log("This should be where the element is: ", elementRandom)

// ========================================
// At this point, should have determined which table we are selecting
// ========================================

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
  finalLeft += elementRandom.width + 45;
}
// console.log("top true or false:", sideRandom === elementRandom.top);
if (sideRandom === elementRandom.top) {
  finalTop -= 45;// -= 45
}
// console.log("bottom true or false:", sideRandom === elementRandom.bottom);
if (sideRandom === elementRandom.bottom) {
  finalTop += elementRandom.height - 10;
}

console.log("Final Top Position: ", finalTop)
console.log("Final Left Position: ", finalLeft)
// console.log("finalRight after move: ", finalRight)
// console.log("finalBottom after move: ", finalBottom)

// ========================================
// At this point, should have the coordinates for the eventual position
// ========================================


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


// CLICK FUNCTIONALITY
waldoBtn.addEventListener('click', clickWaldo)
function clickWaldo() {
    console.log('you clicked me');
    alert(`You've found me!`);
  // remove waldoButton once user finds & clicks it
  waldoBtn.innerHTML ='';
  // replace all other existing iamges
  let imagesToReplace = document.getElementsByTagName('img');
  for (let image of imagesToReplace) {
      image.src = selectedFellow.profile;
      image.style = "object-fit: contain;"
      console.log(image.src);
  }
  // replace all original text
//   let elements = document.getElementsByTagName('*');
//   let regex1 = /Bong Joon-Ho/gi;
//   let regex2 = /Bong/gi;
//   let newText = selectedFellow.name;
//   for (let i = 0; i < elements.length; i++) {
//     let element = elements[i];

//     for (let j = 0; j < element.childNodes.length; j++) {
//         let node = element.childNodes[j];

//         if (node.nodeType === 3) {
//             let text = node.nodeValue;
//             let replacedText = text.replace(regex1, newText);
//             replacedText = replacedText.replace(regex2, newTest);

//               if (replacedText !== text) {
//                   element.replaceChild(document.createTextNode(replacedText), node);
//             }
//         }
//     }
// }

      

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


