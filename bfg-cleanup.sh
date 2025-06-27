# 1. เพิ่ม .gitignore (ถ้ายังไม่มี)
cat <<EOL > .gitignore
node_modules/
coverage/
dist/
*.log
.DS_Store
cypress/videos/
cypress/screenshots/
EOL

# 2. ลบไฟล์/โฟลเดอร์ขนาดใหญ่ที่ถูก track ออกจาก index
git rm -r --cached node_modules
git rm -r --cached cypress/videos
git rm -r --cached cypress/screenshots

# 3. เพิ่ม .gitignore เข้า staging
git add .gitignore

# 4. commit การลบไฟล์และอัปเดต .gitignore
git commit -m "Remove large files/folders from git tracking and update .gitignore"

# 5. ดาวน์โหลด BFG Repo-Cleaner (ถ้ายังไม่มี)
curl -L -o bfg.jar https://repo1.maven.org/maven2/com/madgag/bfg/1.14.0/bfg-1.14.0.jar

# 6. ใช้ BFG เพื่อลบโฟลเดอร์ขนาดใหญ่จากประวัติ git
java -jar bfg.jar --delete-folders node_modules --no-blob-protection
java -jar bfg.jar --delete-folders cypress/videos --no-blob-protection
java -jar bfg.jar --delete-folders cypress/screenshots --no-blob-protection

# 7. Clean up ประวัติ git
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# 8. Force push ขึ้น remote
git push -u origin main --force
