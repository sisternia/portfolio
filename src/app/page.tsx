"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  User,
  GraduationCap,
  LampDesk,
  FolderGit,
  UserRound,
  UsersRound,
  Swords,
  Globe,
  Star,
  ExternalLink,
  Code2,
  Layers,
  Terminal,
  Cpu,
  Award,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Calendar,
  Users,
  ArrowUpRight,
} from "lucide-react";

type Project = {
  id: string;
  name: string;
  subtitle: string;
  category: "personal" | "group";
  categoryLabel: string;
  date: string;
  members: string;
  role: string;
  featured?: boolean;
  stack: string[];
  description: string;
  tasks: string[];
  github: string;
  domain?: string;
};

type SkillItem = {
  name: string;
  logo: string;
};

const PROJECTS: Project[] = [
  {
    id: "harmony-music",
    name: "Harmony Music",
    subtitle: "AIピアノカバー自動生成＆楽譜作成スタジオ",
    category: "personal",
    categoryLabel: "個人開発",
    date: "10/2026 – 11/2026",
    members: "1名",
    role: "フルスタック・AIアプリケーション開発者",
    featured: true,
    stack: [
      "Python",
      "FastAPI",
      "PyTorch",
      "TypeScript",
      "React Native",
      "Expo",
      "Verovio",
    ],
    description:
      "ポピュラー楽曲の音源からピアノカバーMIDIおよび五線譜（MusicXML）を自動生成するアプリケーションです。自動採譜エンジン（tsumugi）と約3,000時間のピアノ演奏データで事前学習した自己回帰Transformerモデルを組み合わせ、原曲のタイムラインと完全同期した自然なピアノアレンジを生成します。専用UI「Cover Studio」では、ピアノロール表示、原曲との同期再生、アレンジ強度・音域・ダイナミクスの調整、任意区間からの部分再生成（インペインティング）、ブラウザ内での楽譜レンダリング・PDF出力が可能です。",
    tasks: [
      "Global/Localの2段階自己回帰Transformerモデルによるピアノ編曲生成パイプラインの実装",
      "FastAPIによる推論バックエンドAPIおよびマルチトラック音源採譜ワーカーの構築",
      "Expo（Web / iOS / Android対応）を用いたCover Studio UIとピアノロール・同期再生プレイヤーの開発",
      "演奏MIDIからピアノ大譜表（MusicXML）への自動変換とVerovioによるブラウザ内楽譜描画機能の実装",
    ],
    github: "https://github.com/sisternia/harmony-music",
  },
  {
    id: "tour-mate",
    name: "TourMate",
    subtitle: "AIチャットボット搭載スマート旅行予約プラットフォーム",
    category: "group",
    categoryLabel: "チーム開発",
    date: "4/2026 – 5/2026",
    members: "2名",
    role: "フルスタック開発者",
    featured: true,
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "LangChain",
      "VNPAY",
    ],
    description:
      "モバイルアプリ（tour-mate）とバックエンド管理システム（tour-server）で構成されるスマート旅行予約プラットフォームです。ツアーの検索・予約・カスタムツアー作成・ガイド管理・レビュー機能に加え、MongoDB Atlas Vector SearchとLLM（Google Gemini / Groq Llama 3.3）を組み合わせたAI RAGチャットボットを搭載し、ユーザーの希望や予算に応じた最適なツアー提案からVNPAYオンライン決済までを一貫してサポートします。",
    tasks: [
      "React Native (Expo Router) を用いたクロスプラットフォーム対応モバイルアプリUI/UXの設計・開発",
      "Node.js / Express と MongoDB によるRESTful API設計およびツアー・予約・ガイド管理機能の構築",
      "MongoDB Atlas Vector Search と LangChain (Gemini / Groq) を活用したAI RAG旅行相談チャットボットの実装",
      "VNPAY決済ゲートウェイ連携、Cloudinary画像管理、Nodemailerによる自動メール通知機能の導入",
    ],
    github: "https://github.com/sisternia/tour",
  },
  {
    id: "nihongo-flashcard",
    name: "Nihongo Flashcard",
    subtitle: "忘却曲線に基づく日本語語彙・漢字学習プラットフォーム",
    category: "group",
    categoryLabel: "チーム開発",
    date: "6/2025 – 8/2025",
    members: "4名",
    role: "フルスタック開発者",
    featured: true,
    stack: [
      "React Native",
      "Node.js",
      "JavaScript",
      "MySQL",
      "AWS",
      "Nginx",
      "HTML/CSS",
    ],
    description:
      "日本語学習者向けに単語や漢字を効率よく定着させるフラッシュカード学習アプリです。音声再生、例文確認、4択クイズ、書き取り練習など多様な学習モードを備え、忘却曲線アルゴリズムに基づく復習スケジューリングによって長期記憶への定着を促します。",
    tasks: [
      "ユーザー認証および個人の学習進捗・復習サイクル管理機能の開発",
      "React NativeフロントエンドとNode.jsバックエンドAPIの設計・連携",
      "AWSおよびNginxを用いた本番クラウドインフラ環境の構築・デプロイ",
      "フラッシュカード学習モードとクイズUIのレスポンス・操作性の最適化",
    ],
    github: "https://github.com/sisternia/flash-card",
    domain: "https://www.nihonflashcard.live/",
  },
  {
    id: "acroom",
    name: "ACRoom",
    subtitle: "WebRTCを用いたリアルタイムビデオ会議デスクトップアプリ",
    category: "personal",
    categoryLabel: "個人開発",
    date: "9/2024 – 12/2024",
    members: "3名",
    role: "フルスタック開発者",
    stack: ["Node.js", "ElectronJS", "WebRTC", "MongoDB", "Bootstrap"],
    description:
      "リアルタイムでオンライン会議を開催・参加できるデスクトップアプリケーションです。低遅延かつ高品質な音声・映像通信を実現し、会議ルームの作成・検索、スケジュール設定、参加者間のスムーズなコミュニケーションをシンプルな操作性で提供します。",
    tasks: [
      "会議ルームの作成・検索・入退室管理およびスケジュール設定機能の実装",
      "WebRTCを用いたピアツーピアのリアルタイム音声・映像通信処理の開発",
      "MongoDBを用いたユーザーアカウントおよび会議履歴データの管理",
      "ElectronJSによるクロスプラットフォーム対応デスクトップUIの最適化",
    ],
    github: "https://github.com/sisternia/RTC",
  },
  {
    id: "hotel-booking",
    name: "Hotel Booking",
    subtitle: "宿泊施設検索・料金比較・オンライン予約システム",
    category: "group",
    categoryLabel: "チーム開発",
    date: "9/2023 – 12/2023",
    members: "2名",
    role: "フルスタック開発者",
    stack: ["PHP", "MySQL", "Ajax", "CSS"],
    description:
      "旅行や出張時の宿泊先探しを効率化するホテル予約Webアプリケーションです。予算・設備条件・エリアによる詳細なフィルタリング機能、料金比較、直前割引やクーポンの適用、宿泊者のレビュー・評価機能を備え、安心かつスムーズな宿泊予約体験を提供します。",
    tasks: [
      "予約管理フローおよび顧客・客室データベースの設計",
      "レスポンシブなフロントエンドUIの設計・実装",
      "Ajaxを用いたページ遷移なしの非同期検索・フィルタリング処理の実装",
      "MySQLによる予約在庫・ユーザー・レビュー情報のデータ管理",
    ],
    github: "https://github.com/sisternia/hotel_booking",
  },
  {
    id: "doctor-call",
    name: "Doctor Call",
    subtitle: "オンライン診療予約＆ビデオ遠隔医療モバイルアプリ",
    category: "group",
    categoryLabel: "チーム開発",
    date: "2/2023 – 5/2023",
    members: "2名",
    role: "フルスタック開発者",
    stack: ["Flutter", "Dart", "Laravel", "PHP", "MySQL"],
    description:
      "専門診療科ごとの医師検索から診察日時の予約、ビデオ通話によるオンライン遠隔診療までをワンストップで行えるヘルスケアアプリです。自宅にいながら医師の診察や健康相談を受けられる直感的なインターフェースを実現しました。",
    tasks: [
      "Flutterを用いたモバイルアプリのUI/UX設計と画面実装",
      "医師検索・診療スケジュール予約・通知機能の開発",
      "LaravelによるバックエンドREST APIの構築",
      "MySQLを用いた患者カルテ・医師プロフィール・予約データの管理",
    ],
    github: "https://github.com/sisternia/medical_app",
  },
  {
    id: "crud-books",
    name: "Crud Books",
    subtitle: "Java & SQL Serverによる書籍蔵書管理システム",
    category: "personal",
    categoryLabel: "個人開発",
    date: "9/2022 – 11/2022",
    members: "1名",
    role: "フルスタック開発者",
    stack: ["Java", "SQL Server"],
    description:
      "書籍情報の登録・編集・削除・検索を効率的に行うデスクトップ蔵書管理アプリケーションです。直感的で分かりやすい画面構成により、蔵書データの素早い検索やカテゴリ別フィルタリングをシンプルに行えます。",
    tasks: [
      "リレーショナルデータベース（SQL Server）のスキーマ設計およびテーブル構築",
      "Javaを用いた書籍データのCRUD（登録・参照・更新・削除）機能の開発",
      "キーワード検索・条件フィルタリング機能の実装",
      "操作ミスを防ぐUIデザインとユーザビリティの改善",
    ],
    github: "https://github.com/sisternia/crud_books",
  },
];

// Inline SVG Data URI for custom technical icons (AWS, REST API, LangChain, WebRTC)
const AWS_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#252F3E" d="M18.6 32.8c0 1.2.1 2.2.4 2.9.3.7.6 1.5 1.1 2.3.2.3.2.6.2.8 0 .3-.2.7-.7 1l-2.2 1.5c-.3.2-.6.3-.9.3-.3 0-.7-.2-1-.5-.5-.5-.9-1.1-1.2-1.7-.3-.6-.6-1.3-.9-2.2-2.3 2.7-5.2 4.1-8.7 4.1-2.5 0-4.5-.7-5.9-2.1C-.6 37.8-1.3 35.9-1.3 33.5c0-2.6.9-4.7 2.8-6.3 1.9-1.6 4.4-2.4 7.6-2.4 1.1 0 2.2.1 3.4.3 1.2.2 2.4.5 3.7.8v-2.5c0-2.6-.5-4.4-1.6-5.4-1.1-1-3-1.5-5.6-1.5-1.2 0-2.4.1-3.7.4-1.3.3-2.5.7-3.7 1.2-.6.3-1 .4-1.2.5-.3.1-.5.1-.6.1-.5 0-.8-.4-.8-1.2v-1.9c0-.6.1-1.1.3-1.4.2-.3.6-.6 1.2-.9 1.2-.6 2.6-1.1 4.3-1.5 1.7-.4 3.5-.6 5.4-.6 4.1 0 7.1.9 9.1 2.8 1.9 1.9 2.9 4.7 2.9 8.5v10.3h-5.6zm-8.6 4.3c1.1 0 2.3-.2 3.5-.6 1.2-.4 2.2-1.1 3-2 .5-.6.9-1.3 1.1-2.1.2-.8.3-1.8.3-2.9v-1.4c-.9-.2-1.9-.4-2.9-.5-1-.1-2-.2-2.9-.2-2.1 0-3.6.4-4.6 1.2-1 .8-1.5 2-1.5 3.5 0 1.4.4 2.5 1.1 3.2.7.5 1.7.8 2.9.8zm28.1 3.7c-.6 0-1-.1-1.3-.3-.3-.2-.6-.7-.8-1.3L28.7 15c-.2-.7-.3-1.1-.3-1.4 0-.6.3-.9.9-.9h3.5c.6 0 1.1.1 1.3.3.3.2.5.7.7 1.3l5.2 20.5 4.8-20.5c.2-.7.4-1.1.7-1.3.3-.2.8-.3 1.4-.3h2.9c.6 0 1.1.1 1.4.3.3.2.5.7.7 1.3l4.9 20.8 5.4-20.8c.2-.7.5-1.1.7-1.3.3-.2.7-.3 1.3-.3h3.3c.6 0 .9.3.9.9 0 .2 0 .4-.1.7-.1.3-.1.6-.3 1l-7.5 24.2c-.2.7-.5 1.1-.8 1.3-.3.2-.8.3-1.3.3h-3.1c-.6 0-1.1-.1-1.4-.3-.3-.2-.5-.7-.7-1.4L47 20.3l-4.7 19.8c-.2.7-.4 1.1-.7 1.4-.3.2-.8.3-1.4.3h-2.1z" transform="translate(3 2) scale(0.9)"/><path fill="#FF9900" d="M56.2 49.4c-6.8 5-16.6 7.7-25.1 7.7-11.9 0-22.6-4.4-30.7-11.7-.6-.6-.1-1.4.7-.9 8.7 5.1 19.5 8.2 30.7 8.2 7.5 0 15.8-1.6 23.4-4.8 1.1-.5 2.1.8 1 1.5z"/><path fill="#FF9900" d="M59 46.2c-.9-1.1-5.8-.5-8-.3-.7.1-.8-.5-.2-.9 3.9-2.8 10.3-2 11.1-1.1.8 1-.2 7.7-4 10.9-.6.5-1.2.2-.9-.4.8-2.1 2.9-7.1 2-8.2z"/></svg>`
  );

const REST_API_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#292524" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`
  );

const WEBRTC_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>`
  );

const LANGCHAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1C3C3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4Z"/><path d="M16 10v1a4 4 0 0 1-8 0v-1"/><rect x="4" y="14" width="16" height="8" rx="3"/><path d="M9 18h6"/></svg>`
  );

const SKILL_GROUPS: {
  category: string;
  code: string;
  icon: typeof Terminal;
  skills: SkillItem[];
}[] = [
  {
    category: "プログラミング言語",
    code: "LANGUAGES",
    icon: Terminal,
    skills: [
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        name: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      },
      {
        name: "Dart",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
      {
        name: "C++",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      },
    ],
  },
  {
    category: "フロントエンド・モバイル",
    code: "FRONTEND & MOBILE",
    icon: Code2,
    skills: [
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React Native",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Expo",
        logo: "https://cdn.simpleicons.org/expo/1C1917",
      },
      {
        name: "Flutter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      },
      {
        name: "ElectronJS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      },
    ],
  },
  {
    category: "バックエンド・データベース",
    code: "BACKEND & DB",
    icon: Layers,
    skills: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "ExpressJS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      {
        name: "FastAPI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "Laravel",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "SQL Server",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
      },
    ],
  },
  {
    category: "クラウド・AI・ツール",
    code: "CLOUD, AI & TOOLS",
    icon: Cpu,
    skills: [
      {
        name: "AWS",
        logo: AWS_SVG,
      },
      {
        name: "Nginx",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
      },
      {
        name: "Git / GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "PyTorch",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "TensorFlow",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "LangChain / RAG",
        logo: LANGCHAIN_SVG,
      },
      {
        name: "Socket.IO",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
      },
      {
        name: "WebRTC",
        logo: WEBRTC_SVG,
      },
      {
        name: "REST API",
        logo: REST_API_SVG,
      },
    ],
  },
];

const ACHIEVEMENTS = [
  {
    title: "Robo Car - VKUコンテスト（2024）",
    award: "奨励賞",
    date: "4/2024 – 6/2024",
    description:
      "自動走行車およびリモート操作車を設計・開発し、他チームと走行性能を競う学内技術コンテストです。コース上でのスピードや車体安定性に加え、センサー制御プログラムの精度やアルゴリズムの工夫が評価されました。チームメンバーと連携して制御ロジックを最適化し、安定した走行パフォーマンスを実現しました。",
  },
  {
    title: "Best Web Design (BWD) VKUコンテスト",
    award: "3位受賞",
    date: "6/2023 – 8/2023",
    description:
      "大学内で毎年開催されるWebデザイン・開発競技会です。情報設計の美しさ、ユーザーインターフェースの使いやすさ、そしてフロントエンド実装の完成度が総合的に審査されました。チームで協力してアイデアを形にし、高いUI/UX品質を実現して3位に入賞しました。",
  },
];

export default function Home() {
  const [filter, setFilter] = useState<"all" | "personal" | "group">("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  const personalCount = PROJECTS.filter((p) => p.category === "personal").length;
  const groupCount = PROJECTS.filter((p) => p.category === "group").length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* =====================================================================
          LEFT SIDEBAR: Profile, Contact, Stats, Education, Languages, Hobbies
      ====================================================================== */}
      <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-20">
        {/* Profile Card */}
        <section className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-xs">
          {/* Dark Charcoal Header Banner */}
          <div className="bg-[#1C1917] text-stone-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <span
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-stone-800 text-stone-300 border border-stone-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                OPEN TO OPPORTUNITIES
              </span>
              <span
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                className="text-xs text-stone-400"
              >
                VN / JP
              </span>
            </div>

            <h1 className="text-2xl sm:text-[26px] font-bold tracking-tight text-white leading-snug">
              グエン・ディン・アン・ヴー
            </h1>
            <p className="text-sm text-stone-400 mt-1 font-medium">
              Nguyễn Đình Anh Vũ
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-3 divide-x divide-stone-200 border-b border-stone-200 bg-stone-50/70">
            <div className="p-3.5 text-center">
              <p
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                className="text-lg font-bold text-stone-900"
              >
                {PROJECTS.length}
              </p>
              <p className="text-[11px] text-stone-500 font-medium mt-0.5">
                開発プロジェクト
              </p>
            </div>
            <div className="p-3.5 text-center">
              <p
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                className="text-lg font-bold text-stone-900"
              >
                3.2<span className="text-xs font-normal text-stone-500">/4.0</span>
              </p>
              <p className="text-[11px] text-stone-500 font-medium mt-0.5">
                大学 GPA
              </p>
            </div>
            <div className="p-3.5 text-center">
              <p
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                className="text-lg font-bold text-stone-900"
              >
                JLPT N3
              </p>
              <p className="text-[11px] text-stone-500 font-medium mt-0.5">
                日本語レベル
              </p>
            </div>
          </div>

          {/* Contact Info List */}
          <div className="p-5 space-y-3 text-sm">
            <a
              href="mailto:vu784512000@gmail.com"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-700 group-hover:text-amber-800 shrink-0">
                <Mail size={15} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] text-stone-500 font-medium">メール</p>
                <p
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                  className="text-xs font-medium text-stone-900 truncate"
                >
                  vu784512000@gmail.com
                </p>
              </div>
              <ArrowUpRight
                size={14}
                className="text-stone-400 group-hover:text-stone-700 shrink-0"
              />
            </a>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-50 border border-stone-200/70">
              <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-700 shrink-0">
                <Phone size={15} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] text-stone-500 font-medium">電話番号</p>
                <p
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                  className="text-xs font-medium text-stone-900"
                >
                  0905 307 261
                </p>
              </div>
            </div>

            <a
              href="https://github.com/sisternia"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-700 group-hover:text-stone-950 shrink-0">
                <Github size={15} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] text-stone-500 font-medium">GitHub</p>
                <p
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                  className="text-xs font-medium text-stone-900 truncate"
                >
                  github.com/sisternia
                </p>
              </div>
              <ArrowUpRight
                size={14}
                className="text-stone-400 group-hover:text-stone-700 shrink-0"
              />
            </a>

            <div className="flex items-start gap-3 p-2.5 rounded-xl bg-stone-50 border border-stone-200/70">
              <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-700 shrink-0 mt-0.5">
                <MapPin size={15} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] text-stone-500 font-medium">所在地</p>
                <p className="text-xs font-medium text-stone-900 leading-relaxed">
                  ベトナム・ザライ省プレイク市タン・ロイ区
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Card */}
        <section className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
            <h2 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-800" />
              学歴
            </h2>
            <span
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              className="text-[11px] font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded"
            >
              2022.10 – 現在
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <h3 className="font-bold text-stone-900 text-sm">
                ベトナム・韓国IT通信大学 (VKU)
              </h3>
              <p className="text-xs text-stone-600 mt-0.5">
                情報技術学士
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/60">
                <p className="text-[11px] text-stone-500">専攻</p>
                <p className="text-xs font-bold text-stone-900 mt-0.5">情報技術</p>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/60">
                <p className="text-[11px] text-stone-500">累積GPA</p>
                <p
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                  className="text-xs font-bold text-stone-900 mt-0.5"
                >
                  3.2 / 4.0
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Card */}
        <section className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
            <h2 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <Globe className="w-4 h-4 text-amber-800" />
              語学スキル
            </h2>
            <span
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              className="text-[10px] tracking-wider uppercase text-stone-400"
            >
              LANGUAGES
            </span>
          </div>

          <div className="space-y-3">
            {[
              { name: "ベトナム語", level: "ネイティブ", bar: "w-full" },
              { name: "日本語", level: "JLPT N3レベル", bar: "w-3/4" },
              { name: "英語", level: "中級（技術文書読解・日常会話）", bar: "w-2/3" },
            ].map((lang) => (
              <div
                key={lang.name}
                className="p-3 rounded-xl bg-stone-50 border border-stone-200/60"
              >
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-bold text-stone-800">{lang.name}</span>
                  <span className="font-medium text-stone-600 bg-white px-2 py-0.5 rounded border border-stone-200">
                    {lang.level}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                  <div className={`h-full bg-stone-800 rounded-full ${lang.bar}`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies & Interests Card */}
        <section className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
            <h2 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-800" />
              趣味・関心
            </h2>
            <span
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              className="text-[10px] tracking-wider uppercase text-stone-400"
            >
              INTERESTS
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "日本の音楽を聴くこと",
              "外国語の学習",
              "新しい技術のキャッチアップ",
              "読書",
              "チーム開発・人助け",
            ].map((hobby) => (
              <span
                key={hobby}
                className="px-3 py-1.5 bg-stone-50 border border-stone-200/80 text-stone-700 rounded-lg text-xs font-medium"
              >
                {hobby}
              </span>
            ))}
          </div>
        </section>
      </aside>

      {/* =====================================================================
          RIGHT MAIN CONTENT: Overview, Skills Matrix, Projects, Achievements
      ====================================================================== */}
      <div className="lg:col-span-8 space-y-8">
        {/* Professional Summary */}
        <section
          id="overview"
          className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs scroll-mt-20"
        >
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-stone-900 text-stone-100 flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                  専門概要
                </h2>
              </div>
            </div>
            <span
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              className="text-xs text-stone-400 tracking-wider uppercase"
            >
              01 / OVERVIEW
            </span>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
            <p>
              これまでに、
              <strong className="font-semibold text-stone-900">
                Next.js・React Native (Expo)・Flutter・ElectronJS
              </strong>
              を用いたWeb・モバイル・デスクトップアプリケーションのフロントエンド開発から、
              <strong className="font-semibold text-stone-900">
                Node.js (Express)・FastAPI・Laravel
              </strong>
              およびリレーショナル／NoSQLデータベース（MySQL・SQL Server・MongoDB）によるバックエンドAPI設計・構築までを一貫して実践してきました。
            </p>
            <p>
              また、
              <strong className="font-semibold text-stone-900">
                AWS・Nginx
              </strong>
              を用いたクラウド環境への本番デプロイ、
              <strong className="font-semibold text-stone-900">
                WebRTC
              </strong>
              によるリアルタイム音声・映像通信、
              <strong className="font-semibold text-stone-900">
                LangChainとベクトル検索（RAG）
              </strong>
              を活用したAIチャットボットや
              <strong className="font-semibold text-stone-900">
                PyTorch
              </strong>
              による音楽生成モデルの統合、オンライン決済（VNPAY）連携など、要件定義・設計から実装・公開までの各工程を個人およびチーム開発で遂行してきました。
            </p>
          </div>

          {/* Core Executed Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-stone-100">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
              <p className="text-xs font-bold text-stone-900">
                マルチプラットフォーム実装
              </p>
              <p className="text-xs text-stone-600 mt-1">
                Next.js / React Native / Flutter / ElectronJS によるWeb・モバイル・デスクトップUI構築
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
              <p className="text-xs font-bold text-stone-900">
                API設計・DB・クラウド運用
              </p>
              <p className="text-xs text-stone-600 mt-1">
                Node.js / FastAPI / Laravel / MySQL / MongoDB と AWS・Nginx による本番環境構築
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
              <p className="text-xs font-bold text-stone-900">
                AIモデル・外部サービス統合
              </p>
              <p className="text-xs text-stone-600 mt-1">
                LangChain RAG・PyTorch推論パイプライン・WebRTC・VNPAY決済のシステム組み込み
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills Matrix with Logos */}
        <section
          id="skills"
          className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs scroll-mt-20"
        >
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-stone-900 text-stone-100 flex items-center justify-center">
                <LampDesk className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                専門スキル
              </h2>
            </div>
            <span
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              className="text-xs text-stone-400 tracking-wider uppercase"
            >
              02 / TECH STACK
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILL_GROUPS.map((group) => {
              const IconComponent = group.icon;
              return (
                <div
                  key={group.category}
                  className="p-4 rounded-xl bg-stone-50/80 border border-stone-200/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-amber-800" />
                        <h3 className="font-bold text-sm text-stone-900">
                          {group.category}
                        </h3>
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-mono), monospace",
                        }}
                        className="text-[10px] text-stone-400 font-medium"
                      >
                        {group.code}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill.name}
                          style={{
                            fontFamily: "var(--font-jetbrains-mono), monospace",
                          }}
                          className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white hover:bg-stone-100/80 border border-stone-200/90 rounded-lg text-xs font-medium text-stone-800 shadow-2xs transition-colors"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            width={16}
                            height={16}
                            className="w-4 h-4 object-contain shrink-0"
                            loading="lazy"
                          />
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs scroll-mt-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-stone-900 text-stone-100 flex items-center justify-center">
                <FolderGit className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                  主なプロジェクト
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  個人開発およびチーム開発の主要プロダクト（全{PROJECTS.length}件）
                </p>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="inline-flex p-1 rounded-xl bg-stone-100 border border-stone-200/80 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === "all"
                    ? "bg-stone-900 text-white shadow-2xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                すべて ({PROJECTS.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("personal")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                  filter === "personal"
                    ? "bg-stone-900 text-white shadow-2xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <UserRound size={12} />
                個人 ({personalCount})
              </button>
              <button
                type="button"
                onClick={() => setFilter("group")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                  filter === "group"
                    ? "bg-stone-900 text-white shadow-2xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <UsersRound size={12} />
                グループ ({groupCount})
              </button>
            </div>
          </div>

          {/* Project Cards List */}
          <div className="space-y-6">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  project.featured
                    ? "bg-[#FAF9F6] border-stone-300 shadow-xs"
                    : "bg-stone-50/60 border-stone-200/90"
                }`}
              >
                {/* Project Card Top Header */}
                <div className="p-5 sm:p-6 border-b border-stone-200/80 bg-white">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-mono), monospace",
                        }}
                        className="text-xs font-bold text-stone-400"
                      >
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold border ${
                          project.category === "personal"
                            ? "bg-stone-100 text-stone-800 border-stone-300"
                            : "bg-amber-950/5 text-amber-900 border-amber-800/20"
                        }`}
                      >
                        {project.category === "personal" ? (
                          <UserRound size={12} />
                        ) : (
                          <UsersRound size={12} />
                        )}
                        {project.categoryLabel}
                      </span>

                      {project.featured && (
                        <span
                          style={{
                            fontFamily: "var(--font-jetbrains-mono), monospace",
                          }}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-stone-900 text-stone-100"
                        >
                          <Sparkles size={10} className="text-amber-400" />
                          FEATURED
                        </span>
                      )}
                    </div>

                    {/* Date & Team Size Pill */}
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                      }}
                      className="flex items-center gap-3 text-xs text-stone-600 bg-stone-100 px-3 py-1 rounded-lg border border-stone-200/80"
                    >
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={12} className="text-stone-500" />
                        {project.date}
                      </span>
                      <span className="text-stone-300">|</span>
                      <span className="inline-flex items-center gap-1 font-sans font-semibold text-stone-700">
                        <Users size={12} className="text-stone-500" />
                        {project.members}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mt-1">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                        {project.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-stone-600 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                    <p className="text-xs text-stone-500 font-medium mt-1 sm:mt-0 shrink-0">
                      役割:{" "}
                      <span className="text-stone-800 font-semibold">
                        {project.role}
                      </span>
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: "var(--font-jetbrains-mono), monospace",
                        }}
                        className="px-2.5 py-0.5 bg-stone-100 border border-stone-200/90 text-stone-800 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Body: Description & Key Tasks */}
                <div className="p-5 sm:p-6 space-y-4">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-stone-200/80">
                    <p className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <BookOpen size={13} className="text-amber-800" />
                      主な担当業務・実装機能
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-stone-700">
                      {project.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-stone-700 shrink-0 mt-0.5"
                          />
                          <span className="leading-snug">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links Footer */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                      }}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs font-medium transition-colors"
                    >
                      <Github size={14} />
                      <span>{project.github.replace("https://", "")}</span>
                      <ExternalLink size={12} className="opacity-75" />
                    </a>

                    {project.domain && (
                      <a
                        href={project.domain}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontFamily: "var(--font-jetbrains-mono), monospace",
                        }}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 text-xs font-medium transition-colors"
                      >
                        <Globe size={14} className="text-emerald-700" />
                        <span>
                          {project.domain
                            .replace("https://", "")
                            .replace(/\/$/, "")}
                        </span>
                        <ExternalLink size={12} className="opacity-75" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Activities & Achievements */}
        <section
          id="achievements"
          className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs scroll-mt-20"
        >
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-stone-900 text-stone-100 flex items-center justify-center">
                <Swords className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                活動・実績
              </h2>
            </div>
            <span
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              className="text-xs text-stone-400 tracking-wider uppercase"
            >
              04 / ACHIEVEMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-stone-50/80 border border-stone-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-950/10 text-amber-950 border border-amber-900/20 text-xs font-bold">
                      <Award size={13} className="text-amber-800" />
                      {item.award}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                      }}
                      className="text-xs text-stone-500 font-medium bg-white px-2.5 py-0.5 rounded border border-stone-200"
                    >
                      {item.date}
                    </span>
                  </div>

                  <h3 className="font-bold text-stone-900 text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
