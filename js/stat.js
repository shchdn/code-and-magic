window.renderStatistics = function(ctx, names, times){
    var CLOUD_X = 100;
    var CLOUD_Y = 10;
    var CLOUD_WIDTH = 420;
    var CLOUD_HEIGHT = 270;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(CLOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);
    ctx.fillStyle = '#fff';
    ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
    ctx.fillStyle = '#000';
    ctx.font = '16px PT mono';
    ctx.fillText( 'Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 30);
    ctx.fillText( 'Список результатов', CLOUD_X + 20, CLOUD_Y + 50);
    var STATS_BAR_HEIGHT = 150;
    var STATS_BAR_WIDTH = 40;
    var STATS_BAR_PADDING = STATS_BAR_WIDTH + 50;
    var STATS_BAR_PLAYER_COLOR = 'rgba(255, 0, 0, 1)';
    var STATS_BAR_X = CLOUD_X - STATS_BAR_PADDING + 20;    
    var STATS_BAR_Y = CLOUD_HEIGHT - 30;
    var getMaxBarHeight = function(){
        var maxTime = 0;
        var nextTime = 0;
        for (var i = 0; i < times.length; i++){
            nextTime = times[i].toFixed(0);
            if (nextTime > maxTime) {
                maxTime = nextTime;
            }
        }
        return STATS_BAR_HEIGHT / maxTime;
    }
    for (var i = 0; i < names.length; i++){
        var statsBarHeight = getMaxBarHeight() * times[i]; 
        ctx.fillStyle = '#000';
        ctx.fillText(times[i].toFixed(0), STATS_BAR_X + STATS_BAR_PADDING, STATS_BAR_Y - statsBarHeight - 10);
        ctx.fillText(names[i], STATS_BAR_X + STATS_BAR_PADDING, CLOUD_HEIGHT - 10);
        if (names[i] == 'Вы'){
            ctx.fillStyle = 'red';
        }
        else{
            var l = 50 - Math.round(Math.random() * 40);
            ctx.fillStyle = 'hsl(254, 100%, ' + l.toString() + '%)';
        }
        ctx.fillRect(STATS_BAR_X + STATS_BAR_PADDING, STATS_BAR_Y, STATS_BAR_WIDTH, -statsBarHeight);
        STATS_BAR_X += STATS_BAR_PADDING;
    }
}