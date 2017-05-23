;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-twitter" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M672.278528 137.880576c71.1168-1.255424 108.962816 24.65792 145.115136 57.61536 30.664704-2.648064 70.530048-19.795968 94.026752-31.700992 7.61856-4.17792 15.223808-8.354816 22.841344-12.506112-13.41952 36.262912-31.620096 64.632832-59.552768 86.177792-6.21056 4.777984-12.36992 11.222016-20.164608 14.27968l0 0.437248c39.824384-0.4096 72.700928-18.376704 103.911424-28.12416l0 0.463872c-16.4096 26.049536-38.583296 52.482048-62.256128 71.431168-9.558016 7.590912-19.115008 15.182848-28.670976 22.772736 0.519168 42.160128-0.601088 82.408448-8.507392 117.851136-45.845504 206.048256-167.315456 345.936896-359.602176 405.87264-69.042176 21.516288-180.627456 30.334976-259.731456 10.703872-39.238656-9.749504-74.68032-20.72576-107.938816-35.253248-18.458624-8.082432-35.579904-16.846848-51.936256-26.81344-5.379072-3.277824-10.758144-6.5536-16.109568-9.803776 17.829888 0.520192 38.706176 5.435392 58.651648 2.21184 18.049024-2.921472 35.743744-2.128896 52.385792-5.787648 41.546752-9.120768 78.408704-21.161984 110.164992-39.757824 15.40096-8.982528 38.774784-19.577856 49.723392-32.575488-20.629504 0.355328-39.319552-4.42368-54.638592-9.831424-59.390976-20.970496-93.959168-59.52512-116.431872-117.413888 17.994752 1.939456 69.82144 6.634496 81.944576-3.575808-22.664192-1.256448-44.42624-14.363648-60.017664-24.111104-47.758336-29.9008-86.72256-80.033792-86.422528-157.145088 6.281216 2.94912 12.547072 5.924864 18.813952 8.901632 12.000256 5.07904 24.192 7.7824 38.501376 10.703872 6.06208 1.256448 18.14528 4.83328 25.094144 2.239488l-0.90112 0c-9.229312-10.730496-24.301568-17.912832-33.586176-29.435904-30.650368-38.1184-59.363328-96.744448-41.1904-166.564864 4.600832-17.693696 11.904-33.340416 19.70176-47.758336 0.28672 0.137216 0.600064 0.301056 0.886784 0.437248 3.56352 7.481344 11.523072 12.94336 16.561152 19.195904 15.673344 19.414016 34.978816 36.862976 54.638592 52.235264 67.035136 52.427776 127.408128 84.647936 224.370688 108.485632 24.576 6.061056 53.02784 10.702848 82.395136 10.730496-8.246272-24.029184-5.610496-62.912512 0.887808-86.176768 16.355328-58.487808 51.825664-100.621312 103.911424-123.230208 12.438528-5.379072 26.254336-9.33888 40.73984-12.479488C657.355776 139.682816 664.809472 138.781696 672.278528 137.880576"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-facebook" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M643.314688 170.966016l112.260096 0 0-168.06912L612.108288 2.896896l0 0.70656C423.75168 10.19392 385.068032 115.33312 381.717504 225.780736l-0.386048 0L381.331456 342.531072 269.07648 342.531072l0 168.090624 112.256 0 0 511.174656 201.403392 0L582.735872 510.62272l144.297984 0 28.540928-168.090624L582.735872 342.532096l0-104.3456C582.735872 201.049088 607.67744 170.966016 643.314688 170.966016z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M897.030033 839.927728l27.261985 90.969879-99.410767-54.672578c-36.245289 9.12448-72.654046 18.271252-108.743297 18.271252-172.4289 0-308.248424-118.387902-308.248424-264.171537 0-145.531002 135.819524-264.171537 308.248424-264.171537 162.851168 0 307.839754 118.633104 307.839754 264.171537C1023.977709 712.415345 969.788104 785.106543 897.030033 839.927728zM616.199633 511.936842c-18.048341 0-36.245289 18.271252-36.245289 36.408757 0 18.397568 18.204378 36.423618 36.245289 36.423618 27.418023 0 45.369769-18.02605 45.369769-36.423618C661.561972 530.208094 643.610225 511.936842 616.199633 511.936842zM815.548722 511.936842c-17.922025 0-36.000087 18.271252-36.000087 36.408757 0 18.397568 18.078062 36.423618 36.000087 36.423618 27.165391 0 45.369769-18.02605 45.369769-36.423618C860.911061 530.208094 842.714113 511.936842 815.548722 511.936842zM385.078331 634.686365c0 26.444646 4.101558 51.945636 11.19012 76.280061-11.19012 0.884213-22.461974 1.44892-33.837853 1.44892-45.243453 0-81.607628-9.265657-126.947675-18.278682l-126.695043 63.819349L145.040598 648.447389C54.30849 584.761786 0.014861 502.671185 0.014861 402.695711c0-173.201657 163.192964-309.600749 362.415737-309.600749 178.202289 0 334.314121 108.981069 365.677665 255.641485-11.531916-1.292882-23.152997-2.154804-34.900394-2.154804C521.053892 346.589074 385.078331 475.654401 385.078331 634.686365zM244.689137 247.891621c-27.15796 0-54.575983 18.03348-54.575983 45.429212 0 27.284277 27.418023 45.570389 54.575983 45.570389 27.165391 0 45.243453-18.286112 45.243453-45.570389C289.93259 265.917671 271.854528 247.891621 244.689137 247.891621zM498.339286 247.891621c-27.165391 0-54.427376 18.03348-54.427376 45.429212 0 27.284277 27.261985 45.570389 54.427376 45.570389 27.291707 0 45.369769-18.286112 45.369769-45.570389C543.709055 265.917671 525.630993 247.891621 498.339286 247.891621z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M730.47792 491.709885c0 0 129.105427-229.116211-244.296959-108.85829 46.810119-36.676317 39.247886-111.410416 2.514263-137.952932-136.705522-98.743932-470.802716 216.430284-470.802716 403.764903 0 113.905236 122.752742 262.011412 402.478608 262.011412 351.906815 0 461.994096-192.401008 461.994096-286.039665C882.365212 495.491001 730.47792 491.709885 730.47792 491.709885zM431.944709 861.389482c-163.92035 15.276938-305.192887-62.470797-315.500651-173.688831-10.422374-111.180172 114.058732-213.704197 278.017968-228.962715 163.92035-15.257495 305.192887 62.470797 315.53749 173.669388C720.345142 743.606938 595.902922 846.131987 431.944709 861.389482z"  ></path>' +
    '' +
    '<path d="M374.060371 538.980491c-88.763626 15.027252-150.274562 88.87926-137.377834 164.860768 12.858866 76.020394 95.212502 125.477806 183.976128 110.469997 88.724741-15.027252 150.2367-88.820931 137.377834-164.860768C545.138748 573.431118 462.823997 523.991102 374.060371 538.980491zM358.63096 755.832378c-28.67304 7.869225-57.80759-7.023974-65.080228-33.278941-7.196912-26.331715 10.191106-54.025451 38.826284-61.932538 28.67304-7.907087 57.80759 6.986111 65.041342 33.278941C404.653133 720.192669 387.302977 747.887428 358.63096 755.832378zM433.095929 671.425989c-14.739702 0-26.696012-11.918447-26.696012-26.65815 0-14.72026 11.95631-26.676569 26.696012-26.676569 14.739702 0 26.657126 11.975752 26.657126 26.676569C459.754079 659.507542 447.835631 671.425989 433.095929 671.425989z"  ></path>' +
    '' +
    '<path d="M950.689321 207.647247C891.769396 132.318608 797.343817 99.653651 684.878372 115.678626c-18.961864 2.687202-32.166607 20.24816-29.459962 39.228443 2.667759 18.922978 20.171412 32.070416 39.210024 29.421077 111.37153-15.890922 171.040515 27.13808 201.478757 66.059532 39.957037 51.14689 51.243081 124.039038 28.039613 181.327812-7.196912 17.752316 1.343601 37.981033 19.11536 45.159526 4.28049 1.727341 8.655124 2.552126 13.012362 2.552126 13.684674 0 26.657126-8.176217 32.127721-21.649066C1020.643556 378.227274 1005.500671 277.718139 950.689321 207.647247z"  ></path>' +
    '' +
    '<path d="M718.213595 241.521752c-18.885116 2.705622-32.088836 20.266579-29.383214 39.210024 2.705622 18.942421 20.171412 32.088836 39.210024 29.421077 31.858592-4.568039 56.67479 3.090385 71.567989 22.128997 13.414521 17.196661 17.388019 42.433438 9.749038 61.414745-7.196912 17.752316 1.382487 37.96159 19.11536 45.159526 4.317329 1.727341 8.655124 2.533706 13.012362 2.533706 13.684674 0 26.696012-8.176217 32.127721-21.649066 17.10047-42.145889 9.480932-93.235474-19.384489-130.161479C836.513932 266.893606 795.270599 230.504838 718.213595 241.521752z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-552ce3f6b2204" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M799.744 146.432q32.768 45.056 36.352 101.376t-26.112 108.544q-28.672 50.176-77.312 75.264t-102.912 20.992q-9.216 25.6-23.552 64.512t-31.744 83.968-35.84 92.16-35.328 88.576-31.232 73.216-22.528 46.08q-15.36 26.624-41.984 40.96t-55.808 17.408-57.856-4.096-47.104-22.528q-25.6-21.504-38.4-44.032t-15.36-46.08 4.608-47.616 21.504-48.64q7.168-13.312 26.112-38.4t44.032-57.344 54.272-68.608 57.856-71.168 54.784-66.048 44.544-52.736q-21.504-22.528-34.304-51.2t-16.384-58.88 2.56-60.928 22.528-59.392 41.472-49.664 54.272-32.768 60.928-13.824 63.488 7.168q-1.024 1.024-1.536 2.048t-1.536 2.048l-64.512 110.592q-14.336 23.552-7.168 48.64t30.72 39.424 48.64 7.168 38.4-30.72zM389.12 825.344q9.216-14.336 4.608-31.232t-18.944-25.088q-15.36-8.192-31.744-4.096t-24.576 18.432q-9.216 15.36-4.608 32.256t18.944 25.088q15.36 8.192 31.744 4.096t24.576-19.456z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pen" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M940.64 82.56c-52.64-52.576-121.952-82.56-190.272-82.56-57.632 0-110.688 21.376-149.44 60.064l-155.744 156.928c-0.48 0.448-1.024 0.736-1.504 1.216-0.256 0.256-0.416 0.608-0.672 0.832l0.064 0.064-330.528 333.088c-15.232 15.136-26.272 33.984-32.416 54.56l-75.168 272.256c-0.064 0.736-4.96 22.112-4.96 32.992 0 61.824 50.208 112 112.128 112 12.32 0 36.16-5.888 37.024-6.016l271.296-71.328c20.608-6.112 39.328-17.248 54.56-32.512l488.416-492.256c88.832-88.896 78.816-237.888-22.784-339.328zM512.448 761.44c-2.624-28.864-10.784-57.184-23.008-84.064l302.56-302.528c18.496 58.432 8.992 119.552-31.552 160.128-0.256 0.256-0.576 0.416-0.8 0.672l0.448 0.416-247.296 249.28c0-7.968 0.384-15.776-0.352-23.904zM473.376 648.192c-11.936-19.616-25.504-38.56-42.304-55.328-19.552-19.552-41.984-34.88-65.408-47.744l305.024-305.024c23.936 10.624 46.88 25.76 67.136 46.016 17.312 17.248 30.688 36.576 40.992 56.672l-305.44 305.408zM335.552 529.984c-29.632-11.936-60.672-18.752-91.776-19.168l246.496-248.384c37.728-36.8 92.672-47.392 146.784-33.984l-301.504 301.536zM133.344 955.936c-3.488 0.8-14.336 3.552-21.696 4.064-26.304-0.32-47.648-21.696-47.648-48 0.384-5.376 2.528-14.624 3.264-17.984l33.696-122.048c36.576-0.992 75.936 13.248 106.88 44.256 31.424 31.36 46.208 71.488 44.608 108.512l-119.104 31.2zM283.968 916.384c-0.768-42.944-18.24-87.616-53.504-122.816-33.344-33.376-76.992-52.64-120.512-54.368l31.872-115.424c2.304-7.68 6.88-15.264 12.512-21.888 64.192-45.952 162.912-32.384 231.488 36.256 72.544 72.512 83.744 178.752 27.872 242.176-3.712 1.952-7.456 3.808-11.488 4.992l-118.24 31.072zM918.112 376.704l-53.888 54.304c0-7.232 0.864-14.176 0.192-21.568-5.632-61.92-34.496-121.792-81.376-168.608-52.128-52.16-121.248-82.08-189.696-82.272l52.992-53.44c26.528-26.464 63.552-41.12 104.032-41.12 51.488 0 104.384 23.296 145.056 63.84 38.176 38.112 60.928 85.472 64.192 133.376 3.008 44.704-11.744 85.696-41.504 115.488z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfonticonfontjiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M787.5 398.5 513.244 672.756 238.988 398.5Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qitaxiangmugongju" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M942.4 289.088c0 0-127.36 128.384-140.352 141.504-12.992 13.056-56.96 11.712-56.96 11.712S628.8 429.12 611.968 412.416C595.328 395.648 583.808 273.92 583.808 273.92S580.544 240.064 597.312 223.232c16.704-16.768 141.056-141.184 141.056-141.184S754.304 64.128 731.2 64C656.64 63.744 505.152 65.472 431.808 139.008L416.576 154.048c-84.736 85.376-92.224 213.184-27.52 307.072L104.64 712.96c-34.176 34.176-71.104 135.168 0 206.4 71.104 71.232 171.776 34.176 205.824-0.064 0 0 203.264-228.928 252.608-283.2 93.568 67.136 222.336 60.48 308.096-25.6l15.104-15.104C957.376 524.032 959.68 373.76 960 297.728 960.192 273.472 942.4 289.088 942.4 289.088zM229.312 878.976c-46.656 0-84.352-37.632-84.352-84.288 0-46.528 37.76-84.288 84.352-84.288 46.592 0 84.224 37.824 84.224 84.288C313.536 841.344 275.904 878.976 229.312 878.976z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon0716ren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M803.967 487.441c-7.322-1.928-13.913-3.465-20.381-4.967 33.175-22.005 54.968-59.372 54.968-101.802 0-67.632-55.522-120.332-123.975-122.518-34.416-1.071-26.967 16.184-17.976 34.891 11.558 23.887 17.976 59.376 17.976 87.627 0 110.062-72.69 87.333-15.408 121.539 21.701 12.972 116.912 125.258 139.429 211.043 9.158 34.81 7.322 51.889 35.4 52.487 16.098 0.341 14.727-0.087 32.324 0 35.058 0.64 56.251-23.121 56.251-52.487C962.573 622.375 894.977 513.895 803.967 487.441z"  ></path>' +
    '' +
    '<path d="M324.831 502.211c57.281-34.206-15.408-11.477-15.408-121.539 0-28.251 6.418-63.74 17.976-87.627 8.991-18.707 16.44-35.962-17.976-34.891-68.453 2.186-123.975 54.886-123.975 122.518 0 42.43 21.792 79.797 54.967 101.802-6.468 1.502-13.059 3.039-20.381 4.967C129.023 513.895 61.427 622.375 61.427 713.254c0 29.366 21.193 53.127 56.252 52.487 17.595-0.087 16.225 0.341 32.324 0 28.078-0.599 26.241-17.677 35.399-52.487C207.919 627.469 303.13 515.183 324.831 502.211z"  ></path>' +
    '' +
    '<path d="M592.324 493.864c52.268-27.915 80.995-79.926 80.995-140.118 0-87.8-72.391-159.246-161.347-159.246-89.042 0-161.433 71.447-161.433 159.246 0 60.193 26.2 112.204 78.469 140.118C310.214 527.34 221.686 643.562 221.686 773.319c0 26.927 1.882 55.603 60.145 56.035 51.969 0.385 353.085-0.127 460.454 0 47.686 0.04 59.802-27.957 60.015-56.035C803.584 644.76 711.249 527.34 592.324 493.864z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-liaotian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M873.385189 307.319318c8.585539 28.940123 13.143345 59.198264 13.143345 90.342588 0 207.689203-202.4949 376.058888-452.284967 376.058888-52.215222 0-102.354156-7.369851-149.018965-20.906146l70.929446-43.669592c23.683399 3.871167 48.025807 6.135744 73.006757 6.135744 218.918965 0 396.385842-155.296949 396.385842-346.83838 0-191.554734-177.467901-346.83838-396.385842-346.83838S32.775986 176.886663 32.775986 368.440373c0 110.967324 59.790758 209.507618 152.455227 273.008884l0 172.924421 89.334631-55.000662c72.311933 84.304058 187.476859 138.850371 317.214688 138.850371 24.982998 0 49.323359-2.261507 73.006757-6.141884l170.920788 105.240903L835.708078 824.409243c92.665493-63.514569 152.454204-162.04463 152.454204-273.022187C988.163305 456.205253 944.335101 369.988636 873.385189 307.319318L873.385189 307.319318zM627.353726 326.514495c25.26543 0 45.734624 20.48659 45.734624 45.727461 0 25.25929-20.469194 45.747927-45.734624 45.747927-25.266453 0-45.736671-20.487613-45.736671-45.747927C581.615009 347.001085 602.087273 326.514495 627.353726 326.514495L627.353726 326.514495zM444.407044 326.514495c25.264407 0 45.735647 20.48659 45.735647 45.727461 0 25.25929-20.470217 45.747927-45.735647 45.747927-25.26543 0-45.737694-20.487613-45.737694-45.747927C398.66935 347.001085 419.141614 326.514495 444.407044 326.514495L444.407044 326.514495zM215.723691 372.241956c0-25.240871 20.470217-45.727461 45.736671-45.727461 25.264407 0 45.736671 20.48659 45.736671 45.727461 0 25.25929-20.47124 45.747927-45.736671 45.747927C236.193909 417.98886 215.723691 397.501246 215.723691 372.241956L215.723691 372.241956z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-git" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.820921 15.46932c-281.242406 0-509.265726 228.02332-509.265726 509.265726 0 225.032196 145.905044 415.878802 348.274078 483.229746 25.462928 4.710278 34.821063-11.076266 34.821063-24.508183 0-12.158924-0.509606-52.263317-0.699941-94.786807-141.703349 30.810726-171.559331-60.093657-171.559331-60.093657-23.171746-58.884109-56.528458-74.543763-56.528458-74.543763-46.215578-31.638581 3.500731-30.937616 3.500731-30.937616 51.117215 3.565199 78.044494 52.454676 78.044494 52.454676 45.452191 77.854159 119.1681 55.31891 148.196227 42.333154 4.583388-32.911574 17.760502-55.382355 32.338522-68.11433-113.12036-12.858866-232.033657-56.528458-232.033657-251.704672 0-55.573713 19.924795-101.025904 52.454676-136.673799-5.28333-12.858866-22.725584-64.612577 4.901637-134.76431 0 0 42.778292-13.68672 140.112108 52.199872 40.614-11.267625 84.155678-16.932648 127.443577-17.124006 43.287899 0.191358 86.893023 5.856381 127.571491 17.124006 97.205902-65.886593 139.92075-52.199872 139.92075-52.199872 27.691689 70.151733 10.31288 121.968889 5.028527 134.76431 32.656771 35.648918 52.390207 81.100086 52.390207 136.673799 0 195.621353-119.1681 238.654448-232.543264 251.258511 18.270109 15.787568 34.56626 46.788629 34.56626 94.278223 0 68.11433-0.573051 122.988102-0.573051 139.729391 0 13.558807 9.166777 29.40982 35.012422 24.444738 202.242144-67.414389 347.95583-258.260995 347.95583-483.165278 0-281.242406-228.02332-509.265726-509.265726-509.265726L511.820921 15.46932z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou-b" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.878622 641.911709l240.941134-259.483125H270.933875l240.944747 259.483125z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)