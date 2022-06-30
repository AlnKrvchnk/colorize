<template>
    <div class="emoji happy ">
        <div class="body">
            <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M1.15672 0H1017V1227H1.15672C1.15672 1227 20.1567 1156.9 20.1567 1111C20.1567 1065.1 4.85432 1040.76 1.15672 995C-6.16567 904.39 23.8154 853.831 20.1567 763C17.7023 702.065 -2.26645 668.888 1.15672 608C4.51182 548.322 33.4555 518.711 36.1567 459C39.5056 384.971 3.71921 346.56 1.15672 272.5C-1.24726 203.022 26.3672 164.742 20.1567 95.5C16.7597 57.626 1.15672 0 1.15672 0Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M1.15672 0H1017V1227H1.15672C1.15672 1227 20.1567 1156.9 20.1567 1111C20.1567 1065.1 4.85432 1040.76 1.15672 995C-6.16567 904.39 23.8154 853.831 20.1567 763C17.7023 702.065 -2.26645 668.888 1.15672 608C4.51182 548.322 33.4555 518.711 36.1567 459C39.5056 384.971 3.71921 346.56 1.15672 272.5C-1.24726 203.022 26.3672 164.742 20.1567 95.5C16.7597 57.626 1.15672 0 1.15672 0Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M1.15672 0H1017V1227H1.15672C1.15672 1227 20.1567 1156.9 20.1567 1111C20.1567 1065.1 4.85432 1040.76 1.15672 995C-6.16567 904.39 23.8154 853.831 20.1567 763C17.7023 702.065 -2.26645 668.888 1.15672 608C4.51182 548.322 33.4555 518.711 36.1567 459C39.5056 384.971 3.71921 346.56 1.15672 272.5C-1.24726 203.022 26.3672 164.742 20.1567 95.5C16.7597 57.626 1.15672 0 1.15672 0Z" />
            </svg>
        </div>

         <div class="eyes ">
            <div class="eye  eye-l"></div>
            <div class="eye  eye-r"></div>
        </div>
        <div class="mouse"></div>
    </div>
</template>
<script>
export default{
    name:'v-emoji',
    data(){
return{
    
}
    }
}
</script>
<style lang="scss">

.emoji {
    border: #7381FF solid 5px;
    background: #333333;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;
    width: 100%;
    position: relative;
    aspect-ratio: 1 / 1;
    
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.3));
    
    .eye {
        &::after {
            animation: eye 2s ease;
        }
    }

    &.error {
        .mouse {
            width: 5%;
            height: 6%;
            border-radius: 50%;
        }

        .eye {
            &::after {
                animation: none;
            }
        }


    }

    &.happy {
        .mouse {
            width: 10%;
            height: 5%;
            border-radius: 0% 0% 100% 100%;

        }

        .eye {
            &::after {
                animation: none
            }
        }

    }

    .mouse {
        transition: all 0.5s ease;
        background-color: #333333;
        width: 10%;
        height: 1%;
        position: absolute;
        top: 62%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 25%;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.62);
        ;
    }

    .eye {
        background-color: #333333;
        width: 6%;
        height: 8%;
        position: absolute;
        top: 45%;
        left: 35%;
        border-radius: 50%;
        overflow: hidden;
        transform: translateX(-50%);

        &::after {
            content: "";
            background-color: #ffffff;
            width: 50%;
            height: 40%;
            position: absolute;
            top: 5%;
            left: 40%;
            transform: translateX(-50%);
            border-radius: 50%;

        }

        &-r {
            left: 65%;
        }
    }
    
    .body {
        width: 100%;
        top: 0;
        background: #333333;
    transform: rotate(45deg);
        height: 100%;

        >svg {
            left: 12%;
            width: 300%;
            height: 300%;
            mix-blend-mode: color-dodge;
            fill: #0000ff;
            position: absolute;
            filter: drop-shadow(0px 0px 15px #0000ff);
            animation: transform 12s ease infinite alternate;
        }

        :nth-child(3) {
            
            fill: #ff0000;
            filter: drop-shadow(0px 0px 15px #FF0000);
            animation: transform 10s ease infinite alternate;
        }

        :nth-child(2) {
            fill: #00ff00;
            filter: drop-shadow(0px 0px 15px #00ff00);
            animation: transform 10s ease infinite alternate-reverse;
        }
    }
}

@keyframes transform {
    0% {
        top: 0%;
        
    }

    100% {
        top: -180%;
        
    }
}
</style>