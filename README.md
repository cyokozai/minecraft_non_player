# git-template

Git template with GitHub Actions workflows

## 概要

このリポジトリは、新しいプロジェクトを始める際のテンプレートとして使用できます。包括的なGitHub Actionsワークフローとプロジェクト設定が含まれています。

## 含まれている機能

### GitHub Actions ワークフロー

#### 1. CI/CD Pipeline (`sample.yaml`)

- **リント・フォーマットチェック**: ESLint、Prettierによるコード品質チェック
- **テスト実行**: 複数のNode.jsバージョンでのテスト実行
- **セキュリティスキャン**: Trivyによる脆弱性スキャン
- **Dockerイメージビルド**: GitHub Container Registryへのプッシュ
- **デプロイメント**: ステージング・本番環境への自動デプロイ
- **リリース作成**: 自動的なリリースノート生成

#### 2. 依存関係更新 (`dependency-update.yaml`)

- 週次での依存関係自動更新
- 自動PR作成による更新管理

#### 3. コード品質チェック (`code-quality.yaml`)

- SonarQubeによる静的コード解析
- TypeScript型チェック
- Lighthouse CI によるパフォーマンステスト
- Bundle sizeチェック

### プロジェクト管理

#### イシューテンプレート

- **Bug Report**: バグ報告用のテンプレート
- **Feature Request**: 新機能提案用のテンプレート

#### PR テンプレート

- 標準化されたプルリクエストテンプレート
- チェックリスト付きレビュープロセス

#### Dependabot設定

- npm、GitHub Actions、Docker依存関係の自動更新
- 日本時間での週次更新スケジュール

### コミットメッセージテンプレート

このリポジトリには、統一されたコミットメッセージのフォーマットを維持するための `.gitmessage` ファイルが含まれています。

#### テンプレートの使用方法

リポジトリをクローンした後、以下のいずれかの方法でテンプレートを設定してください：

**自動設定（推奨）:**

```shell
./setup.sh
```

**手動設定:**

```shell
git config --local commit.template .gitmessage
```

#### コミットメッセージのフォーマット

設定後、`git commit` コマンドを実行すると、以下のテンプレートが自動的に表示されます：

```
<type>(<scope>): <description>  # e.g., feat(auth): add login functionality

Explain what changes were made and why they were necessary

[ticket: X]
```

**使用可能なタイプ:**

- `fix`: バグ修正 🐛
- `feat`: 新機能 ✨
- `docs`: ドキュメント修正 📝
- `style`: コードスタイルの修正 💄
- `refactor`: リファクタリング ♻️
- `perf`: パフォーマンス改善 🚀
- `test`: テストの修正・改善 💚
- `chore`: 依存パッケージなどのアップデート 🍱

## 使用方法

1. このテンプレートを使用して新しいリポジトリを作成
2. Gitコミットメッセージテンプレートを設定:
   - リポジトリをクローンした後、以下のコマンドを実行してコミットメッセージテンプレートを設定してください

      ```shell
      ./setup.sh
      ```

   - または、手動で設定することもできます

      ```shell
      git config --local commit.template .gitmessage
      ```

3. 使用目的や言語に合わせて [gitignore.io](https://www.toptal.com/developers/gitignore) から gitignore ファイルを作成
   - 以下のコマンドを実行することで直接 gitignore ファイルを作成できます

      ```shell
      curl https://www.toptal.com/developers/gitignore/api/{{ your language }},visualstudiocode -o ./.gitignore
      ```

4. プロジェクトの要件に応じてワークフローをカスタマイズ
5. 必要なシークレットを GitHub Settings で設定:
   - `SONAR_TOKEN`: SonarQubeトークン
   - `CC_TEST_REPORTER_ID`: CodeClimate テストレポーターID
   - `LHCI_GITHUB_APP_TOKEN`: Lighthouse CI トークン

## カスタマイズ

各ワークフローファイルは、プロジェクトの要件に応じてカスタマイズできます：

- Node.js バージョンの変更
- テストコマンドの調整
- デプロイ先の設定
- 通知設定の追加

## 注意事項

- 一部のワークフローは外部サービス（SonarQube、CodeClimate等）の設定が必要です
- プロジェクトの性質に応じて不要なワークフローは削除してください
- シークレットの設定を忘れずに行ってください
- 使用したい機能のyamlファイルについて、各自`.deny`を取り除いた上で使用してください
