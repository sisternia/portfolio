import { Mail, Phone, MapPin, Github, User, GraduationCap, LampDesk, FolderGit, UserRound, UsersRound, Swords, Globe, Star} from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-10 p-2">
      {/* Thông tin cá nhân */}
      <section className="p-6 bg-gray-900 rounded-xl">
        <h1 className="text-3xl font-bold mb-6 text-white">グエン・ディン・アン・ヴー</h1>

        <div className="grid md:grid-cols-4 gap-4">
          {/* Email */}
          <div className="flex items-center justify-center gap-2 bg-gray-50 p-3 rounded-md shadow-sm text-sm text-black">
            <Mail size={16} className="text-red-600 shrink-0" />
            <a
              href="mailto:vu784512000@gmail.com"
              className="hover:underline whitespace-nowrap"
            >
              vu784512000@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-2 bg-gray-50 p-3 rounded-md shadow-sm text-sm text-black">
            <Phone size={16} className="text-blue-600 shrink-0" />
            <span className="whitespace-nowrap">0905 307 261</span>
          </div>

          {/* Github */}
          <div className="flex items-center justify-center gap-2 bg-gray-50 p-3 rounded-md shadow-sm text-sm text-black">
            <Github size={16} className="text-gray-800 shrink-0" />
            <a
              href="https://github.com/sisternia"
              className="hover:underline whitespace-nowrap"
            >
              github.com/sisternia
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-md shadow-sm text-sm text-black">
            <MapPin size={16} className="text-green-600 shrink-0 mt-1" />
            <div className="flex flex-col">
              <span>ザライ省、プレイク市</span>
              <div className="flex justify-between w-full">
                <span>タン・ロイ区</span>
                <span>ベトナム</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tổng quan */}
      <section className="p-6 bg-white shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <User className="w-6 h-6" />
          専門概要
        </h2>
        <p className="text-lg text-justify leading-relaxed">
        私は現在大学4年生で、NextJSやReact Native、Flutterを使ったWebおよびモバイルアプリ開発に力を入れています。フロントエンドだけでなく、LaravelやPHP、NodeJSを使ったバックエンド開発にも取り組み、AWSを活用したインフラ設計・構築の経験も積んでいます。これまでにユーザーフレンドリーで機能的なアプリケーションを複数開発し、技術力だけでなく、実践的な問題解決能力やチームでのコミュニケーション力も養ってきました。<br></br>

        御社のニアショア開発や多様な案件に参加することで、さらにスキルを磨き、社会に貢献できるエンジニアを目指しています。積極的に学び続け、チームの一員として成果を出すことを大切にしています。
        </p>
      </section>

      {/* Học vấn */}
      <section className="p-6 bg-white shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GraduationCap className="w-6 h-6" />
          学歴
        </h2>
        <div className="space-y-2">
          {/* Bằng cấp + Thời gian */}
          <div className="flex justify-between text-lg font-semibold">
            <span>情報技術学士</span>
            <span>2022年10月 ～ 現在</span>
          </div>

          {/* Trường */}
          <p className="text-base">ベトナム・韓国IT通信大学</p>

          {/* GPA */}
          <p className="text-base">GPA：3.2 / 4.0</p>

          {/* Chuyên ngành */}
          <p className="text-base">専攻：情報技術</p>

          {/* Năm học */}
          <p className="text-base">学年：4年</p>
        </div>
      </section>

      {/* Kỹ năng */}
      <section className="p-6 bg-white shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <LampDesk className="w-6 h-6" />
          専門スキル
        </h2>
        <div className="space-y-6 text-lg">
          {/* Ngôn ngữ lập trình */}
          <div>
            <h3 className="font-semibold text-xl mb-2">プログラミング言語</h3>
            <div className="flex flex-wrap gap-2">
              {["C++", "Java", "Python", "PHP", "Dart", "JavaScript", "TypeScript"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 rounded-full shadow-sm text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h3 className="font-semibold text-xl mb-2">フロントエンド</h3>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React Native", "Bootstrap", "Flutter", "ElectronJS"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-50 rounded-full shadow-sm text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="font-semibold text-xl mb-2">バックエンド</h3>
            <div className="flex flex-wrap gap-2">
              {["Laravel", "ExpressJS", "MongoDB", "MySQL", "SQL Server"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-green-50 rounded-full shadow-sm text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Khác */}
          <div>
            <h3 className="font-semibold text-xl mb-2">ツール＆その他</h3>
            <div className="flex flex-wrap gap-2">
              {["AWS", "Git / GitHub", "REST API", "WebRTC", "Socket.IO", "TensorFlow"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-yellow-50 rounded-full shadow-sm text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dự án */}
      <section className="p-6 bg-white shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FolderGit className="w-6 h-6" />
          主なプロジェクト
        </h2>
        <div className="space-y-8">
          {/* 個人 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <UserRound className="w-6 h-6" />
              個人
            </h3>
            <div className="space-y-4">
              {[
                {
                  name: "Crud Books",
                  date: "9/2022 – 11/2022",
                  members: "1名",
                  role: "フルスタック開発者",
                  stack: ["Java", "SQLServer"],
                  description:
                    "こちらはJavaで作られた本の管理アプリケーションです。簡単に本の情報を追加・編集・削除できます。シンプルで使いやすいアプリです。こちらはJavaで作られた本の管理アプリで、基本的な追加・編集・削除の機能があります。シンプルで使いやすいです。",
                  tasks: [
                    "データベース設計およびテーブル構築",
                    "書籍のCRUD機能を開発",
                    "検索・フィルタリング機能の実装",
                    "UIデザインとユーザビリティ改善"
                  ],
                  github: "https://github.com/sisternia/crud_books"
                },
                {
                  name: "ACRoom",
                  date: "9/2024 – 12/2024",
                  members: "3名",
                  role: "フルスタック開発者",
                  stack: ["NodeJS", "ElectronJS", "Bootstrap", "WebRTC", "MongoDB"],
                  description:
                    "ACRoomは直接会議用のアプリケーションです。このアプリでは、リアルタイムで会議を開催し、参加者が簡単に接続して交流できます。操作がシンプルで使いやすく、音声や映像の品質も良いです。会議のスケジュール設定や管理も可能です。ACRoomは直接会議用のアプリケーションです。このアプリでは、リアルタイムで会議を開催し、参加者が簡単に接続して交流できます。操作がシンプルで使いやすく、音声や映像の品質も良いです。会議のスケジュール設定や管理も可能です。",
                  tasks: [
                    "会議室作成・検索機能の実装",
                    "WebRTCを用いたリアルタイム通信開発",
                    "MongoDBでユーザーデータ管理",
                    "UI最適化とクロスプラットフォーム対応"
                  ],
                  github: "https://github.com/sisternia/RTC"
                }
              ].map((project) => (
                <div key={project.name} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold">{project.name}</h4>
                    <span className="text-sm text-blue-600 font-semibold px-2 py-1 bg-white rounded shadow">
                      {project.date} <span className="ml-2">{project.members}</span>
                    </span>
                  </div>

                  <div className="flex justify-between mt-2 gap-4">
                    <div className="w-1/3 p-2 bg-white border rounded-lg shadow-sm">
                      <p className="text-base font-semibold">役割:</p>
                      <p className="mt-1">{project.role}</p>
                    </div>
                    <div className="flex-1 p-2 bg-white border rounded-lg shadow-sm">
                      <p className="text-base font-semibold">技術スタック:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.stack.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-yellow-50 rounded-full shadow-sm text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="mt-3">{project.description}</p>

                  <div className="mt-3 p-3 bg-white border rounded-lg shadow-sm">
                    <p className="font-semibold">主な業務:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 mt-1">
                      {project.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 p-3 bg-white border rounded-lg shadow-sm">
                    <p className="font-semibold">GitHub</p>
                    <a
                      href={project.github}
                      className="text-blue-600 hover:underline text-sm block mt-1"
                      target="_blank"
                    >
                      {project.github.replace("https://", "")}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* グループ */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <UsersRound className="w-6 h-6" />
              グループ
            </h3>
            <div className="space-y-4">
              {[
                {
                  name: "Hotel Booking",
                  date: "9/2023 – 12/2023",
                  members: "2名",
                  role: "フルスタック開発者",
                  stack: ["PHP", "CSS", "Ajax", "MySQL"],
                  description:
                    "ホテル予約アプリは、旅行や出張の際に便利なツールです。ユーザーは簡単にホテルの検索、料金比較、予約ができます。多くのアプリは多様なフィルター機能を備え、予算や好み、施設の条件に合った宿泊先を素早く見つけられます。また直前割引やクーポンも利用可能でお得に予約できます。さらに、レビューや評価を参考に、安心して宿泊先を選べます。これにより、快適でスムーズな旅の計画をサポートします。",
                  tasks: [
                    "予約システムと顧客管理の設計",
                    "フロントエンドUI開発",
                    "Ajaxによる非同期通信の実装",
                    "MySQLを用いたデータ管理"
                  ],
                  github: "https://github.com/sisternia/hotel_booking"
                },
                {
                  name: "Doctor Call",
                  date: "2/2023 – 5/2023",
                  members: "2名",
                  role: "フルスタック開発者",
                  stack: ["Dart", "PHP", "Flutter", "Laravel", "MySQL"],
                  description:
                    "Doctor Callは、ユーザーが医師の診察予約を簡単にできるアプリケーションです。専門分野ごとに医師を検索し、診察日時や場所を選択して予約ができます。ビデオ通話による遠隔診療も可能で、自宅にいながら医師の診察や相談を受けられる便利なサービスです。シンプルで使いやすく、ユーザーの健康管理をサポートします。",
                  tasks: [
                    "モバイルUI/UX設計",
                    "予約機能の開発",
                    "バックエンドAPI開発（Laravel）",
                    "MySQLで患者・医師データ管理"
                  ],
                  github: "https://github.com/sisternia/medical_app"
                },
                {
                  name: "Nihongo Flashcard",
                  date: "6/2025 – 8/2025",
                  members: "4名",
                  role: "フルスタック開発者",
                  stack: ["HTML", "CSS", "JS", "NodeJS", "React Native", "MySQL", "Nginx", "AWS"],
                  description:
                    "Nihongo Flashcardは、日本語学習者向けのアプリで、単語や漢字を効率よく覚えられるフラッシュカード機能を提供します。音声、文章、クイズ、書き取り練習など多様な学習モードがあり、楽しく続けられます。AnkiやWanikaniなどの有名なアプリもあり、自分好みにカスタマイズできるものが多いです。これらは忘却曲線に基づく復習システムで、効率的に語彙や漢字の記憶を助けます。",
                  tasks: [
                    "ユーザー登録・学習進捗管理機能の開発",
                    "フロントエンドReactとバックエンドAPI構築",
                    "クラウド環境（AWS, Nginx）でのデプロイ",
                    "Flashcard機能と学習体験の最適化"
                  ],
                  github: "https://github.com/sisternia/flash-card",
                  domain: "https://www.nihonflashcard.live/"
                }
              ].map((project) => (
                <div key={project.name} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold">{project.name}</h4>
                    <span className="text-sm text-blue-600 font-semibold px-2 py-1 bg-white rounded shadow">
                      {project.date} <span className="ml-2">{project.members}</span>
                    </span>
                  </div>

                  <div className="flex justify-between mt-2 gap-4">
                    <div className="w-1/3 p-2 bg-white border rounded-lg shadow-sm">
                      <p className="text-base font-semibold">役割:</p>
                      <p className="mt-1">{project.role}</p>
                    </div>
                    <div className="flex-1 p-2 bg-white border rounded-lg shadow-sm">
                      <p className="text-base font-semibold">技術スタック:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.stack.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-yellow-50 rounded-full shadow-sm text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="mt-3">{project.description}</p>

                  <div className="mt-3 p-3 bg-white border rounded-lg shadow-sm">
                    <p className="font-semibold">主な業務:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 mt-1">
                      {project.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 p-3 bg-white border rounded-lg shadow-sm">
                    <p className="font-semibold">GitHub</p>
                    <a
                      href={project.github}
                      className="text-blue-600 hover:underline text-sm block mt-1"
                      target="_blank"
                    >
                      {project.github.replace("https://", "")}
                    </a>
                  </div>

                  {project.domain && (
                    <div className="mt-3 p-3 bg-white border rounded-lg shadow-sm">
                      <p className="font-semibold">Domain</p>
                      <a
                        href={project.domain}
                        className="text-green-600 hover:underline text-sm block mt-1"
                        target="_blank"
                      >
                        {project.domain.replace("https://", "")}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hoạt động và thành tích */}
      <section className="p-6 bg-white shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Swords className="w-6 h-6" />
          活動・実績
        </h2>

        <div className="space-y-6">
          {[
            {
              name: "Best Web Design (BWD) VKUコンテスト - 3位受賞。",
              date: "6/2023 – 8/2023",
              description: `このコンテストは、大学内で毎年開催されるWebデザイン競技会です。  
      デザインの美しさ、ユーザーインターフェースの使いやすさ、そして実装の完成度が評価されます。  
      チームで協力して創造的なアイデアを形にし、優れたUX/UIを提供することを目指しました。`
            },
            {
              name: "Robo Car - VKUコンテスト（2024）- 奨励賞。",
              date: "4/2024 – 6/2024",
              description: `自動走行車やリモート操作車を設計・開発し、他チームと競技するイベントです。  
      コース上でのスピードや安定性だけでなく、制御プログラムの精度や創造的な工夫も評価対象となりました。  
      チームメンバーと協力してアルゴリズムを最適化し、競争力のあるパフォーマンスを実現しました。`
            }
          ].map((item) => (
            <div key={item.name} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">{item.name}</h4>
                <span className="text-sm text-blue-600 font-semibold px-2 py-1 bg-white rounded shadow">
                  {item.date}
                </span>
              </div>
              <p className="text-sm text-gray-700 whitespace-pre-line">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ngôn ngữ & Sở thích */}
      <section className="p-6 bg-white shadow rounded-xl">

        <div className="flex flex-wrap gap-6">
          {/* Ngôn ngữ */}
          <div className="flex-1 p-4 bg-gray-50 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Globe size={20} className="text-green-600" />
              <h3 className="text-lg font-semibold">言語</h3>
            </div>
            <div className="space-y-2">
              {[
                { name: "ベトナム語", level: "ネイティブ" },
                { name: "英語", level: "中級" },
                { name: "日本語", level: "N3レベル" }
              ].map((lang) => (
                <div
                  key={lang.name}
                  className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm"
                >
                  <span className="text-sm font-medium">{lang.name}</span>
                  <span className="px-3 py-1 bg-yellow-50 rounded-full shadow-sm text-sm">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sở thích */}
          <div className="flex-1 p-4 bg-gray-50 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Star size={20} className="text-yellow-500" />
              <h3 className="text-lg font-semibold">趣味</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              {[
                "日本の歌をよく聞く",
                "外国語を学ぶ",
                "新しい技術を学ぶ",
                "本をよむこと",
                "人を助ける"
              ].map((hobby) => (
                <span
                  key={hobby}
                  className="px-3 py-1 bg-yellow-50 rounded-full shadow-sm text-sm"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
