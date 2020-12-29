#!/bin/bash

pihole --regex '(^|\.)ytstatic\.l\.google\.com$' '(^|\.)ytimg\.l\.google\.com$' '(^|\.)ytimg\.com$' '(^|\.)youtubei\.googleapis\.com$' '(^|\.)youtube-ui\.l\.google\.com$' '(^|\.)googlevideo\.com$' '(^|\.)youtube\.com$' '(^|\.)Netflix\.com$' '(^|\.)disneyplus\.com$' '(^|\.)primevideo\.com$' '(^|\.)instagram\.com$' '(^|\.)cdninstagram\.com$' '(^|\.)tiktokcdn\.com$' '(^|\.)tiktokv\.com$' '(^|\.)musica\.ly$'

