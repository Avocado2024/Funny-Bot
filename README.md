# Funny Bot

**Funny Bot** is a personal experimental project created to help me better understand Decision Language Models (DLMs) through hands-on coding and experimentation.

ဒီ Telegram Bot ကို ရေးသားဖြစ်ခဲ့တာက Decision Model တွေရဲ့ အလုပ်လုပ်ပုံ၊ User ရဲ့ တောင်းဆိုမှုတွေကို ဘယ်လိုအဓိပ္ပာယ်ဖော်ပြီး ဆုံးဖြတ်ချက်ချသလဲဆိုတာကို ကိုယ်တိုင် ပိုမိုနားလည်လာချင်လို့ ဖြစ်ပါတယ်။

ဒီ project ဟာ လက်တွေ့စမ်းသပ်ရင်း သင်ယူဖို့ ရည်ရွယ်ထားတဲ့ ကိုယ်ပိုင် Learning Project တစ်ခုဖြစ်ပြီး Code တွေမှာ အမှားအယွင်းတွေ၊ မပြည့်စုံမှုတွေနဲ့ ပြုပြင်ဖို့လိုအပ်တဲ့ အပိုင်းတွေ ရှိနေနိုင်ပါတယ်။

## Project Information

- **Developer:** Min Thant Naing (Avocado)
- **Date:** October 9, 2026
- **Technologies:** OpenRouter · grammY · NekosAPI
- **Purpose:** Personal Learning & Experimentation

## How It Works

ဒီ project မှာ User ရဲ့ တောင်းဆိုမှုကို Decision Model က အဓိပ္ပာယ်ဖော်ပြီး သက်ဆိုင်ရာ Image Tags တွေကို ရွေးချယ်ပေးကာ NekosAPI ကနေ ပုံတွေကို ရှာဖွေပေးတဲ့ workflow ကို စမ်းသပ်ထားပါတယ်။

1. **User Input** — ကိုယ်လိုချင်တဲ့ပုံအမျိုးအစားကို စာသားနဲ့ ရေးပို့တယ်။
2. **Decision Making** — Decision Model က တောင်းဆိုမှုကို အဓိပ္ပာယ်ဖော်ပြီး သင့်လျော်တဲ့ Tags တွေကို ရွေးချယ်တယ်။
3. **Image Retrieval** — NekosAPI ကနေ သက်ဆိုင်ရာပုံတွေကို ရှာဖွေတယ်။
4. **Result Delivery** — ရရှိလာတဲ့ပုံကို Telegram ကနေ ပြန်ပို့ပေးတယ်။

## Development Notes

ဒီ project ကို စတင်ရေးသားခဲ့ချိန်မှာ Programming ကို စနစ်တကျ နားလည်ကျွမ်းကျင်မှု မရှိသေးတာကြောင့် လိုအပ်ချက်တွေနဲ့ အမှားအယွင်းတွေ ရှိနိုင်ပါတယ်။

Programming အတွေ့အကြုံ အကန့်အသတ်ရှိခြင်း၊ API Usage Costs ကြောင့် စမ်းသပ်မှုတွေကို အလွယ်တကူ အကြိမ်ကြိမ်မလုပ်နိုင်ခြင်းနဲ့ Internet Connection အခက်အခဲတွေကြားကနေ ကိုယ်တိုင်လေ့လာရင်း ရေးသားထားခဲ့တာပါ။

ဒီ project ရဲ့ အဓိကရည်ရွယ်ချက်က ပြည့်စုံကောင်းမွန်တဲ့ Software တစ်ခုကို ဖန်တီးဖို့ထက် Decision Model တွေကို လက်တွေ့အသုံးပြုရင်း ပိုမိုနားလည်လာဖို့နဲ့ ကိုယ့်ရဲ့ Programming Skills ကို တိုးတက်လာစေဖို့ ဖြစ်ပါတယ်။

AI Models၊ APIs နဲ့ Dependencies တွေ ပြောင်းလဲလာတာနဲ့အမျှ လက်ရှိ Code တွေကိုလည်း နောက်ပိုင်းမှာ ပြန်လည်ပြင်ဆင်ဖို့ လိုအပ်လာနိုင်ပါတယ်။

## Setup Guidelines

### Prerequisites

- Node.js
- Telegram Bot Token
- OpenRouter API Key
- Internet Connection

### Installation

**1. Clone the repository**

```bash
git clone <repository-url>
cd Funny-Bot
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

`.env.example` ကို အခြေခံပြီး `.env` ဖိုင်တည်ဆောက်ကာ လိုအပ်တဲ့ API Keys တွေကို ဖြည့်သွင်းပါ။

**4. Run the bot**

Project ရဲ့ Entry Point အပေါ်မူတည်ပြီး အောက်ပါ Command တွေကို အသုံးပြုနိုင်ပါတယ်။

```bash
node start.js
```

သို့မဟုတ် Development အတွက် —

```bash
npx nodemon .
```

_Note: Run commands တွေကို project ရဲ့ လက်ရှိ file structure နဲ့ ကိုက်ညီအောင် ပြင်ဆင်ဖို့ လိုအပ်နိုင်ပါတယ်။_
