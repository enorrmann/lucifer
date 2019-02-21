import api
import json
import sys
import secret

hmac_key = secret.hmac_key
hmac_secret = secret.hmac_secret
conn = api.hmac(hmac_key, hmac_secret)
