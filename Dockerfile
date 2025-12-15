# =========================================================
# STAGE 1: BUILDER
# Erstellt die produktionsfertigen statischen Assets
# =========================================================
FROM node:22-alpine AS builder

# Setzt das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiert die Abhängigkeitsdateien und installiert sie
# Nutzt caching, um Build-Zeiten zu verkürzen
COPY package*.json ./
RUN npm ci

# Kopiert den gesamten Code und startet den Build-Prozess von Vite/React
COPY . .
RUN npm run build

# =========================================================
# STAGE 2: RUNTIME
# Stellt die statischen Assets mit Nginx bereit
# =========================================================
FROM nginx:alpine

# Fügt die angepasste Nginx-Konfiguration hinzu
# Dies stellt sicher, dass Nginx korrekt konfiguriert ist (z.B. für SPA-Routing)
# Stellen Sie sicher, dass eine Datei namens 'nginx.conf' im Projekt-Root existiert!
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Kopiert die gebauten Dateien aus der 'builder'-Stage in das Nginx-Webroot
# Der Pfad /app/dist ist der Standard-Ausgabeordner von Vite
COPY --from=builder /app/dist /usr/share/nginx/html

# EXPOSE ist nur Dokumentation (Port 80 ist der Nginx-Standard)
EXPOSE 80

# Der Befehl, der den Nginx-Server startet (Dauerhafter Hauptprozess)
CMD ["nginx", "-g", "daemon off;"]